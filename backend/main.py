from flask import Flask
from flask import request
from flask_cors import CORS
import array
import routes

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/test', methods=['GET', 'POST'])
def test():
    print("inside /test")
    req = request.get_json(force=True)
    print(req.get('payload').get('arguments'))
    kwargs = req.get('payload').get('arguments')
    print(kwargs)
    print(type(kwargs))
    # args_list = array.array("i", args).tolist()
    # print(args_list)
    return routes.test(**kwargs)

@app.route('/linkedauth', methods=['GET', 'POST'])
def linkedauth():
    print('inside /linkedauth')
    req = request.get_json(force=True)
    code = req.get('payload').get('code')
    return routes.linkedauth(code)

@app.route('/linkedauthcallback', methods=['GET', 'POST'])
def linkedauthcallback():
    print('inside /linkedauthcallback')
    return routes.linkedauthcallback()

@app.route('/linkeduserprofile', methods=['GET', 'POST'])
def linkeduserprofile():
    print('inside /linkeduserprofile')
    req = request.get_json(force=True)
    return routes.linkeduserprofile(req)

if __name__ == "__main__":
  app.run(host='0.0.0.0', port=5000, debug=True)