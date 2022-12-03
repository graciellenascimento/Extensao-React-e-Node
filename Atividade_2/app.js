let dados = { 
    instituicao: "IFPE", 
    aprendendo: [
        {
            primeiroModulo: "NodeJs", 
            segundoModulo: "React Native", 
            terceiroModulo: "React"
        }
    ] 
};

const express = require('express');

const app = express();

app.get('/',(req, res) =>{
    res.send(
        `Bem-vindo ao programa de extensão do ${dados.instituicao}!` +
        ` Agora estamos aprendendo ${dados.aprendendo[0]['primeiroModulo']}. 
        Em seguida aprenderemos ${dados.aprendendo[0]['segundoModulo']} 
        e ${dados.aprendendo[0]['terceiroModulo']}.`
    )
    res.end()
})

const PORT = process.env.PORT ||5000;

app.listen(PORT, console.log(
    `Server started on port ${PORT}`
));