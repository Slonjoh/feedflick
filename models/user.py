#!/usr/bin/python3
"""
User
"""
from models.base_model import BaseModel, Base
import sqlalchemy
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, String
"""from werkzeug.security import generate_password_hash, check_password_hash"""


class User(BaseModel, Base):
    """
    User class representing a user entity.
    """
    __tablename__ = 'users'

    email = Column(String(128), nullable=False)
    password = Column(String(128), nullable=False)
    first_name = Column(String(128), nullable=False)
    last_name = Column(String(128), nullable=False)
    username = Column(String(50), unique=True, nullable=False)
    profile_picture_url = Column(String(255), nullable=True)  # New column for profile picture URL
    user_type = Column(String(50), nullable=False)  # New column for user type

    def __init__(self, *args, **kwargs):
        """initializes user"""
        super().__init__(*args, **kwargs)
