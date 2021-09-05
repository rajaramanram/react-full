from flask import Flask,request,jsonify
from flask_mail import Mail, Message
import json

app =Flask(__name__)
mail=Mail(app)

app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'vmr.rajaraman@gmail.com'
app.config['MAIL_PASSWORD'] = 'raja81'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)

@app.route("/mail_flask",methods=[post])
def index():
    data= request.get_json()
    msg = Message(data.subject, sender = data.sender, recipients =data.to)
    msg.body = data.body
    mail.send(msg)
    return jsonify({'status': True, 'data': 'Data Sent'})

if __name__ == '__main__':
    app.run(debug = True)