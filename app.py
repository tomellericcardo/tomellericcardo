# -*- coding: utf-8 -*-

from flask import Flask, send_from_directory

app = Flask(__name__)


# INVIO DI FILES

# Homepage
@app.route('/')
@app.route('/home')
def home():
    return send_from_directory('public/html/', 'home.html')

# Altri files
@app.route('/<cartella>/<nome_file>')
def invia_file(cartella, nome_file):
    return send_from_directory('public/' + cartella + '/', nome_file)


# AVVIO DEL SERVER

if __name__ == '__main__':
    app.run(threaded = True)
