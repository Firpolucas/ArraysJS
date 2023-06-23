const notas = [10, 6, 8];

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1; //operador ternario
})
console.log(notasAtualizadas);