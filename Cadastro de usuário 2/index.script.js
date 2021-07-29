$(function () {
    
    console.log("Estou na index");

    var dados = getUrlVars();

    var listaUsuarios = dados.dados ? JSON.parse(decodeURI(dados.dados)) : [];

    if(!listaUsuarios)
         listaUsuarios = [];

    console.log(listaUsuarios);

    
    for(var i=0; i<listaUsuarios.length; i++){

        var item = listaUsuarios[i];

        var novaLinha = $(`
        <tr>
           <td>${item.id}</td>
           <td>${item.nome}</td>
           <td>${item.email}</td>
           <td>${item.senha}</td>
           <td>${item.dtcriacao}</td>
           <td>${item.dtatual}</td>
        </tr>
        `);

        $('#dados').append(novaLinha);

    }

    function getUrlVars()
    {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

    document.novo = ()=>{
        window.location = "cadastro.html?dados="+ JSON.stringify(listaUsuarios);
        
    }

});
