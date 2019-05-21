//var dbConnection = require('../../config/dbConecction');

module.exports = function(app){

   app.get('/noticias', function(req,res){

        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        //connection.query('select * from noticias', function(error, result){
        noticiasModel.getNoticias( function(error, result){
            res.render('noticias/noticias',{noticias: result});
        });
   });
}