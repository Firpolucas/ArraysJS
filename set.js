const nome = ["lucas", "mateus", "gabriel", "ezequiel", "gabriel", "mateus", "lucas"]
const meuSet = new Set(nome); //new Set retorna somente uma vez os numeros repetidos

const nomesAtualizados = [...meuSet];
console.log(nomesAtualizados);