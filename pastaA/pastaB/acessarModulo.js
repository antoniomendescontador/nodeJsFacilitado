//require busca dentro da pasta inicialemnte o arquivo 'index.js'
const moduloA = require('../../moduloA')
console.log(moduloA.ola);

const saudacao = require('saudacao')
console.log(saudacao.ola);

const pastaC = require('./pastaC')
console.log(pastaC.ola2);

/*
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080)
*/
