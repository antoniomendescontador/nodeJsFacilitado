//this fora da função aponta para module.exports e exports
//mas dentro de uma função ele aponto para global e module

console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function logThis(){
    console.log('Dentro de uma função ...')
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global);

    this.perigo = '...'
}

logThis()