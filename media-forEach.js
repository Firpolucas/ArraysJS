const notas = [10, 6.5, 8, 7.5]
let somaDasNotas = 0;

notas.forEach(function(nota, indice){ //percorre o array primeiro parametro tras os dados do array e o segundo o indice e o terceiro o array atual
    somaDasNotas += nota;
    console.log(indice);
})
const media = somaDasNotas / notas.length
console.log(`A média das notas é ${media}`);