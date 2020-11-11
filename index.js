const express = require('express');
const app = express();



app.get("/", (req,res) => {
    res.send("<h1>Hello World</h1>")
});

app.get("/ola/:name",(req,res) => {
    // REQ -> DADOS ENVIADOS PELO USUARIO
    // RES -> RESPOSTA QUE VAI SER ENVIADA PARA O USUARIO
    // :name? -> Parametro não obrigatorio
    var name = req.params.name;
    res.send(`Olá ${name}`)
});

app.get("/query", (req,res) => {
    // http://localhost:4000/query?lang=node;    
    var study = req.query["lang"];
    if(study){
        res.send(`${study}`)
    }else{
        res.send(`QUERY`)
    }
    
});



app.listen(4000,(erro) => {
    if(erro){
        console.log('ERRO AO RODAR SERVIDOR',erro)
    }else{
        console.log('SERVIDOR FUNCIONANDO CORRETAMENTE')
    }
});