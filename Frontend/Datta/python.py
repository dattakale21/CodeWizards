from flask import Flask, request, render_template
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://dattakale21:datta2003@cluster0.vh3gwx8.mongodb.net/signup"

mongo = PyMongo(app)

@app.route('/')
def login():
    return render_template('login.html')

@app.route('/signup')
def show_signup():
    return render_template('signup.html')

@app.route('/forgot', methods=['GET', 'POST'])
def forgot_signup():
    if request.method == 'POST':
        # Handle the logic for processing the form data here
        return "Password reset request received!"
    return render_template('forgot.html')

@app.route('/signup', methods=['POST'])
def submit_signup():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    users = mongo.db.users
    user_id = users.insert({'name': name, 'email': email, 'password': password})
    new_user = users.find_one({'_id': user_id})
    return {'name': new_user['name'], 'email': new_user['email'], 'password': new_user['password']}

if __name__ == '__main__':
    app.run(debug=True)


