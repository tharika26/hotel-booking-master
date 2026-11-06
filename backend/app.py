from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Configuring Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = os.getenv('EMAIL_USER')
app.config['MAIL_PASSWORD'] = os.getenv('EMAIL_PASS')
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('EMAIL_USER')

mail = Mail(app)

# Debug endpoint to check env vars
@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({
        "status": "ok",
        "email_user_set": bool(os.getenv('EMAIL_USER')),
        "email_pass_set": bool(os.getenv('EMAIL_PASS')),
        "email_user1_set": bool(os.getenv('EMAIL_USER1'))
    }), 200

@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')
        
        if not all([name, email, message]):
            return jsonify({"error": "Missing required fields"}), 400
        
        msg = Message(
            'Contact Form Submission',
            sender=os.getenv('EMAIL_USER'),
            recipients=[os.getenv('EMAIL_USER1')]
        )
        msg.body = f"Message from {name} ({email}):\n\n{message}"
        
        mail.send(msg)
        return jsonify({"message": "Message sent successfully!"}), 200
    
    except Exception as e:
        print(f"Contact error: {str(e)}")
        return jsonify({"error": f"Failed to send message: {str(e)}"}), 500

@app.route('/api/payment', methods=['POST'])
def payment():
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'phoneNumber', 'checkInDate', 'checkOutDate', 'roomDetails']
        for field in required_fields:
            if field not in data or not data[field]:
                return jsonify({"error": f"Missing required field: {field}"}), 400
        
        name = data.get('name')
        email = data.get('email')
        phone_number = data.get('phoneNumber')
        check_in = data.get('checkInDate')
        check_out = data.get('checkOutDate')
        room = data.get('roomDetails')
        
        # Validate room details
        if not isinstance(room, dict):
            return jsonify({"error": "roomDetails must be an object"}), 400
        
        required_room_fields = ['roomType', 'price', 'features', 'maxCapacity']
        missing_fields = [f for f in required_room_fields if f not in room]
        if missing_fields:
            return jsonify({"error": f"Missing room fields: {', '.join(missing_fields)}"}), 400
        
        # Build email
        features = ', '.join(room['features']) if isinstance(room['features'], list) else str(room['features'])
        
        msg = Message(
            'New Booking Details',
            sender=os.getenv('EMAIL_USER'),
            recipients=[os.getenv('EMAIL_USER1')]
        )
        
        msg.body = (f"Booking Details:\n\n"
                    f"Name: {name}\n"
                    f"Email: {email}\n"
                    f"Phone Number: {phone_number}\n"
                    f"Check-In Date: {check_in}\n"
                    f"Check-Out Date: {check_out}\n"
                    f"Room Type: {room['roomType']}\n"
                    f"Price: {room['price']}\n"
                    f"Features: {features}\n"
                    f"Max Capacity: {room['maxCapacity']} Guests\n")
        
        mail.send(msg)
        print(f"Booking email sent for {name} ({email})")
        return jsonify({"message": "Booking details sent successfully!"}), 200
    
    except Exception as e:
        print(f"Payment error: {str(e)}")
        return jsonify({"error": f"Booking failed: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)