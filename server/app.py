# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, User
import config

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])
app.config.from_object(config)

db.init_app(app)

print("start")

@app.before_first_request
def create_tables():
    db.create_all()

@app.route('/submit_support_area', methods=['POST'])
def get_web_request():
    data = request.json
    print(data)
    return jsonify({"message": "data"}), 201

if __name__ == '__main__':
    app.run(debug=True)
