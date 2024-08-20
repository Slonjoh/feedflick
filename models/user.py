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
    first_name = Column(String(128))
    last_name = Column(String(128))
    username = Column(String(50)) #Column(String(50), unique=True, nullable=False)
    profile_picture_url = Column(String(255))  # New column for profile picture URL

    """@property
    def password(self):
        raise AttributeError('password is not a readable attribute')

    @password.setter
    def password(self, password):
        self.password_hash = generate_password_hash(password)

    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)

    @classmethod
    def get_user_by_username(cls, username):
        return storage.session.query(cls).filter_by(username=username).first()"""


    def __init__(self, *args, **kwargs):
        """initializes user"""
        super().__init__(*args, **kwargs)
