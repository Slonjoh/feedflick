-- Create or use the feedflick_dev_db database
CREATE DATABASE IF NOT EXISTS feedflick_dev_db;

-- Create or use the feedflick_dev user with the password 'feedflick_dev_pwd' on localhost
CREATE USER IF NOT EXISTS 'feedflick_dev'@'localhost' IDENTIFIED BY 'Feedflick2#';

-- Grant all privileges on the feedflick_dev_db database to the feedflick_dev user
GRANT ALL PRIVILEGES ON feedflick_dev_db.* TO 'feedflick_dev'@'localhost';

-- Grant SELECT privilege on the performance_schema database to the hbnb_dev user
GRANT SELECT ON performance_schema.* TO 'feedflick_dev'@'localhost';
