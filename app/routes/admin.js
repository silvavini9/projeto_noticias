module.exports = function(app) {
    app.get('/formulario_inclusao_noticia',function(req,res){
        res.render("admin/form_add_noticias", {validacao:{}});
    });

    app.post('/noticias/salvar', function(req, res) {
    	var noticia = req.body;


        req.assert('titulo', 'Titulo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'Data é obrigatório').notEmpty();
        req.assert('noticia', 'Notícia é obrigatório').notEmpty();

        var erros = req.validationErrors();

        console.log(erros); //vai mostrar a Lista de erros no console

        if(erros){
            res.render("admin/form_add_noticias", {validacao: erros});//Faz voltar à pagina de inclusão de notícia
            return;//o return faz que não continue o processo seguinte
        }
        
    	var connection = app.config.dbConnection();
    	var noticiasModel = new app.app.models.NoticiasDAO(connection);

    	noticiasModel.salvarNoticia(noticia, function(error, result) {
    		res.redirect('/noticias');
    	});

    });	
}