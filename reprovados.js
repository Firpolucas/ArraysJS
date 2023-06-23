const alunos = ["lucas", "gabriel", "mateus", "ezequiel"];
const medias = [10, 4, 6, 9];

const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;
});
console.log(reprovados);