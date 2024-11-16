from flask import Blueprint, render_template, request, redirect, url_for, flash, jsonify
import os

# Create a Blueprint for the frontend
frontend = Blueprint('frontend', __name__, template_folder='templates', static_folder='static')

# Route for the main page
@frontend.route('/')
def index():
    # Render the main page template
    return render_template('index.html')

# Route for handling user login
@frontend.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        # Here you would add logic to verify the username and password
        if username == 'admin' and password == 'password':  # Example check
            flash('Logged in successfully!', 'success')
            return redirect(url_for('frontend.index'))
        else:
            flash('Invalid credentials', 'danger')
    return render_template('login.html')

# Route for handling user logout
@frontend.route('/logout')
def logout():
    # Logic to log out the user
    flash('Logged out successfully!', 'success')
    return redirect(url_for('frontend.index'))

# Route for handling API requests
@frontend.route('/api/data', methods=['GET'])
def get_data():
    # Example data to return
    data = {
        "projects": [
            {"name": "Project 1", "description": "Description of project 1"},
            {"name": "Project 2", "description": "Description of project 2"}
        ]
    }
    return jsonify(data)

# Route for serving static files
@frontend.route('/static/<path:filename>')
def serve_static(filename):
    return frontend.send_static_file(filename)

# Example function to handle form submissions
@frontend.route('/submit', methods=['POST'])
def submit_form():
    data = request.form.to_dict()
    # Process the form data
    flash('Form submitted successfully!', 'success')
    return redirect(url_for('frontend.index'))
