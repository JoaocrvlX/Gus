from flask import Flask, request
from flask import render_template

app = Flask(__name__, static_url_path='/static')

dados = {}

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/cardapio', methods=['GET'])
def cardapio():
    return render_template('cardapio.html')

@app.route('/api', methods=['GET', 'POST', 'DELETE'])
def api():
    if request.method == "POST":
        descricao = request.form['descricao']
        preco = request.form['preco']
        imagem = request.form['imagem']
        nome = request.form['nome']
        dados[nome] = {'nome':nome, 'preco':preco, 'descricao':descricao, 'imagem':imagem}
    elif request.method == "DELETE":
        nome = request.form['nome']
        del dados[nome]
    return dados   

app.run(host='0.0.0.0')


