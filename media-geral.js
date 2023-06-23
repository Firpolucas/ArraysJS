const salaJS = [7, 8, 8, 7, 10, 6, 4]
const salaPython = [7, 3, 4, 7, 10, 6, 4]
const salaJava = [7, 8, 2, 7, 1, 6, 4]

function calculaMedia(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => acumulador + nota, 0) //percorre o array guarda o dado no acumulador e soma com a nota ate o final do array | primeiro parametro a funcao callback para retornar o calculo e o segundo a posicao inicial que no caso é 0
    const media = somaDasNotas / notasDaSala.length;
    return media;
}
console.log(`A media da sala JS é ${calculaMedia(salaJS)}`);
console.log(`A media da sala Python é ${calculaMedia(salaPython)}`);
console.log(`A media da sala é Java é ${calculaMedia(salaJava)}`);