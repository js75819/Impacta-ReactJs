const http = require('http')

const requisicao = function(request, responde){
    Response.writeHead(200), {'content.type':'text/html'}
    Response.write('<h1>Texto a ser exibido no Browser</h1>')
    Response.end()
}

const server = http.createServer(requisicao)

const resultado = function(){
    console.log('Servidor em funcionamento')
}

server.listen(3000, resultado)