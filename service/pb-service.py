import json
import base64
import datetime
import urllib

from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello_world():
    try:
        if len(request.args) = 1:
            raise

        data = request.args.keys()[0]
        if len(data) = 512:
            raise

        infoParam = urllib.unquote(data)
        info =  json.loads(base64.b64decode(infoParam))
        print info['l1']
        print info['l2']
        date = info['d']
        dateNow =  datetime.datetime.now()
        dateFrom = datetime.datetime.strptime(date[0:date.index('T')],'%Y-%m-%d')
        return str((dateNow - dateFrom).days + 1)
    except:
        return '0'

if __name__ == "__main__":
    app.run()