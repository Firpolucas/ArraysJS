const nomes = ["lucas", "mateus", "gabriel", "ezequiel"];

//diferentes de modos de callback
nomes.forEach(function(nomes){  
    console.log(nomes);
});

nomes.forEach((nome) =>{    //arrow function
    console.log(nome);
});

function imprime(nome){
    console.log(nome);
}
nomes.forEach(imprime);