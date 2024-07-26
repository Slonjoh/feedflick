from flask import Blueprint, jsonify, request
from models.user import User
from models import storage

user_bp = Blueprint('user', __name__)

@user_bp.route('/<user_id>', methods=['GET'])
def get_user(user_id):
    user = storage.get(User, user_id)
    if user:
        return jsonify(user.to_dict())
    return jsonify({"message": "User not found"}), 404

