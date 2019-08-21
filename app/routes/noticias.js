module.exports = function(app){
   app.get('/noticias', function(req,res){
        app.app.controllers.noticias.noticias(app, req, res);
   });

   app.get('/noticia', function(req,res){
       app.app.controllers.noticias.noticia(app,req,res);
    });

    app.post('/buscar', function(req,res){
        app.app.controllers.noticias.buscar(app, req, res);
    })
}