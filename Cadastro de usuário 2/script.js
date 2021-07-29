$(function () {

    
    console.log("Estou no cadastro");

    $('.date').mask('00/00/0000');
    $('.placeholder').mask("00/00/0000", { placeholder: "__/__/____" });

    
    var dados = getUrlVars();
    var listaUsuarios = JSON.parse(decodeURI(dados.dados));

    if(!listaUsuarios)
         listaUsuarios =[];

    console.log(listaUsuarios);

    function getUrlVars()
    {
        var vars = [], hash;
        var hashes  = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
            
        }
        return vars;
    
    }

    
    document.salvar = salvar;

    function salvar() {

        try {

            var novoUsuario = {
                id:$("#id").val(),
                nome:$("#nome").val(),
                email:$("#email").val(),
                senha:$("#senha").val(),
                dtcriacao:$("#dtcriacao").val(),
                dtatual:$("#dtatual").val(),
            };

            validaId(novoUsuario);
            validaNome(novoUsuario);
            validaEmail(novoUsuario);
            validaSenha(novoUsuario);
            validaDtcriacao(novoUsuario);
            validaDtatual(novoUsuario);
            
            

            listaUsuarios.push(novoUsuario);

            window.location = "index.html?dados="+ JSON.stringify(listaUsuarios);
            
            limparCampos();
        }
             
    
        catch (error) {
            alert(error);
        }
    }

    function limparCampos(){

        $("#id").val('');
        $("#nome").val('');
        $("#email").val('');
        $("#senha").val('');
        $("#dtcriacao").val('');
        $("#dtatual").val('');
    }

    

    function validaId(usuario) {
        if (usuario.id == '')
            throw Error("O campo id é obrigatório.");

    
    }
    function validaNome(usuario) {
        if (usuario.nome == '')
            throw Error("O campo nome é obrigatório.");

    }
    function validaEmail(usuario) {
        if (usuario.email == '')
            throw Error("O campo email é obrigatótio.");

        if (!usuario.email.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i))
            throw Error("Digite um e-mail válido");

    }
    function validaSenha(usuario) {
        if (usuario.senha == '')
            throw Error("O campo senha é obrigatório.");

            if(usuario.senha.length > 5)
                return "O campo senha precisa ter máximo 5 caracteres.";
    }
    function validaDtcriacao(usuario) {
        if (usuario.dtcriacao == '')
            throw Error("O campo data de criação é obrigatório.");

            if(usuario.dtcriacao.length > 10)
                return "O campo Data de Criação precisa ter máximo 8 caracteres.";
    }
    function validaDtatual(usuario) {
        if (usuario.dtatual == '')
            throw Error("O campo data atual é obrigatório.");

            if(usuario.dtatual.length > 10)
               return "O campo Data Atual precisa ter máximo 8 caracteres.";
    }

    
});
