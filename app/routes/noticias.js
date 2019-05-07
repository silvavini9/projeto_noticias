//var dbConnection = require('../../config/dbConecction');

module.exports = function(app){

   app.get('/noticias', function(req,res){

        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;

        //connection.query('select * from noticias', function(error, result){
        noticiasModel.getNoticias(connection, function(error, result){
            res.render('noticias/noticias',{noticias: result});
        });
   });
}