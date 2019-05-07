module.exports = function(app) {
    app.get('/formulario_inclusao_noticia',function(req,res){
        res.render("admin/form_add_noticias");
    });

    app.get('/noticias/salvar', function(req, res) {
        res.send("Chegou na página");
    });
}