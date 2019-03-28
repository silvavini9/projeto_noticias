var http = require ('http');

var server = http.createServer(function(req,res){
    var categoria = req.url;
    if(categoria == '/cursos'){
        res.end("<html><head><meta charset='UTF-8'></head><meta><body><h1> IFMS - Notícias de Cursos </h1><body><html>");
    } else if (categoria == '/esportes'){
        res.end("<html><head><title>Fazendo Aplicações Node</title><meta charset='UTF-8'></head><meta><body><h1> IFMS - Notícias de Esportes</h1><body><html>");
    } else if(categoria == '/pesquisa'){
        res.end("<html><head><title>Fazendo Aplicações Node</title><meta charset='UTF-8'></head><meta><body><h1> IFMS - Notícias de Pesquisa </h1><body><html>");
    }
    else {
        res.end("<html><head><title>Fazendo Aplicações Node</title><meta charset='UTF-8'></head><meta><body><h1> Portal de notícias IFMS </h1><body><html>");
    }

});

server.listen(3000);
console.log('Escutando a porta 3000');