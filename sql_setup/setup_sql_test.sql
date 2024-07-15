-- Create or use the feedflick_test_db database
CREATE DATABASE IF NOT EXISTS feedflick_test_db;

-- Create or use the feedflick_test user with the password 'feedflick_test_pwd' on localhost
CREATE USER IF NOT EXISTS 'feedflick_test'@'localhost' IDENTIFIED BY 'Feedflick2#';

-- Grant all privileges on the feedflick_test_db database to the feedflick_test user
GRANT ALL PRIVILEGES ON feedflick_test_db.* TO 'feedflick_test'@'localhost';

-- Grant SELECT privilege on the performance_schema database to the hbnb_test user
GRANT SELECT ON performance_schema.* TO 'feedflick_test'@'localhost';
