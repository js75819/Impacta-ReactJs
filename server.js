const http = require('http')

const requisicao = function(_, response){ //função underline representando request que não está sendo ultilizado.
    response.writeHead(200), {'content.type':'text/html'}
    response.write('<h1>Texto a ser exibido no Browser</h1>')
    response.end()
}

const server = http.createServer(requisicao)

const resultado = function(){
    console.log('Servidor em funcionamento')
}

server.listen(3000, resultado)