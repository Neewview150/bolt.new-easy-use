from flask import Flask, request, session, jsonify, render_template, send_from_directory
import os

app = Flask(__name__)
app.secret_key = 'supersecretkey'  # Replace with a secure key in production

# Set the directory for static files (frontend assets)
STATIC_FOLDER = os.path.join(os.getcwd(), 'static')
TEMPLATES_FOLDER = os.path.join(os.getcwd(), 'templates')

# Initialize the Flask app with static and template folders
app = Flask(__name__, static_folder=STATIC_FOLDER, template_folder=TEMPLATES_FOLDER)

# Example route for serving the main page
@app.route('/')
def index():
    return render_template('index.html')

# Example API endpoint for handling user requests
@app.route('/api/request', methods=['POST'])
def handle_request():
    data = request.json
    # Process the request data and perform necessary actions
    response_data = {"message": "Request processed successfully"}
    return jsonify(response_data)

# Example route for serving static files
@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory(STATIC_FOLDER, filename)

# Example session management route
@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    session['username'] = username
    return jsonify({"message": f"User {username} logged in successfully"})

@app.route('/logout', methods=['POST'])
def logout():
    session.pop('username', None)
    return jsonify({"message": "User logged out successfully"})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
