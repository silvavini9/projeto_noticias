var app = require('./config/server');

app.set('view engine', 'ejs');//Define o tipo de motor de vizualização

var rotaNoticias = require('./app/routes/noticias')(app);

var rotaHome = require('./app/routes/home')(app);


var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticias')(app);

app.listen(3000,function() {
    console.log('Servidor ON');
})