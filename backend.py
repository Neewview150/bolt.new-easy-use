from flask import session, jsonify, request
import sqlite3

# Database setup (for demonstration purposes, using SQLite in-memory database)
def init_db():
    conn = sqlite3.connect(':memory:')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            password TEXT NOT NULL
        )
    ''')
    conn.commit()
    return conn

# Initialize the database
db_conn = init_db()

# Function to handle user login
def login_user(username, password):
    cursor = db_conn.cursor()
    cursor.execute('SELECT * FROM users WHERE username = ? AND password = ?', (username, password))
    user = cursor.fetchone()
    if user:
        session['username'] = username
        return jsonify({"message": f"User {username} logged in successfully"})
    else:
        return jsonify({"message": "Invalid username or password"}), 401

# Function to handle user logout
def logout_user():
    session.pop('username', None)
    return jsonify({"message": "User logged out successfully"})

# Function to handle API requests
def process_api_request(data):
    # Example processing logic
    response_data = {"message": "Request processed successfully", "data": data}
    return jsonify(response_data)

# Function to add a new user (for demonstration purposes)
def add_user(username, password):
    cursor = db_conn.cursor()
    cursor.execute('INSERT INTO users (username, password) VALUES (?, ?)', (username, password))
    db_conn.commit()
    return jsonify({"message": f"User {username} added successfully"})

# Example usage in a Flask route
def handle_login_request():
    username = request.form.get('username')
    password = request.form.get('password')
    return login_user(username, password)

def handle_logout_request():
    return logout_user()

def handle_api_request():
    data = request.json
    return process_api_request(data)
