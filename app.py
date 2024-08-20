from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from dotenv import load_dotenv
import os


load_dotenv()


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


user = os.getenv('FEEDFLICK_MYSQL_USER')
password = os.getenv('FEEDFLICK_MYSQL_PWD')
host = os.getenv('FEEDFLICK_MYSQL_HOST')
db = os.getenv('FEEDFLICK_MYSQL_DB')
env = os.getenv('FEEDFLICK_ENV')


app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+pymysql://{user}:{password}@{host}/{db}'  # DB URI
app.config['JWT_SECRET_KEY'] = '7inU0dKKNxk7vT9h53tL5m19b6mw1bDlsraqruWGQKA'  # Change this to a secret key


db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(128), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)
    first_name = db.Column(db.String(128), nullable=False)
    last_name = db.Column(db.String(128), nullable=False)
    username = db.Column(db.String(50), unique=True, nullable=False)
    profile_picture_url = db.Column(db.String(256), nullable=True)
    user_type = db.Column(db.String(50), nullable=False)  # New field for user type

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    if data['password'] != data['confirmPassword']:
        return jsonify({'message': 'Passwords do not match'}), 400
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    # Handle None profile_picture_url
    profile_picture_url = data.get('profile_picture_url', '')
    new_user = User(
        email=data['email'],
        password=hashed_password,
        first_name=data['first_name'],
        last_name=data['last_name'],
        username=data['username'],
        profile_picture_url=profile_picture_url,
        user_type=data['userType']  # Save user type
    )

    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'User created successfully'}), 201

    except IntegrityError as e:
        db.session.rollback()  # Rollback the transaction to avoid partial commits
        if "Duplicate entry" in str(e.orig):
            if "for key 'user.username'" in str(e.orig):
                return jsonify({"message": "Username already exists."}), 409
            if "for key 'user.email'" in str(e.orig):
                return jsonify({"message": "Email already exists."}), 409
        return jsonify({"message": "An unexpected error occurred."}), 500

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    if user and bcrypt.check_password_hash(user.password, data['password']):
        profile_picture_url = user.profile_picture_url if user.profile_picture_url else ''
        access_token = create_access_token(identity={
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'username': user.username,
            'profile_picture_url': profile_picture_url
        })
        return jsonify({'access_token': access_token}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401

@app.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    return jsonify({'message': 'Successfully logged out'}), 200

@app.route('/user', methods=['GET'])
@jwt_required()
def get_user():
    current_user = get_jwt_identity()
    print(f"Current User: {current_user}")
    return jsonify({'user': current_user}), 200

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0', port=5000, debug=True)

