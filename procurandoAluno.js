const alunos = ["lucas", "gabriel", "mateus", "ezequiel"];
const medias = [10, 8, 7.5, 9];

const AlunosMedias = [alunos, medias];

function showAlunoNota(nome){
    if(AlunosMedias[0].includes(nome)){ //includes verifica se o parametro esta incluso no array
       // const aluno = AlunosMedias[0];
       // const media = AlunosMedias[1];
       const [aluno, media] = AlunosMedias; //essa linha executa a mesma funcao das duas linhas acima
        const indice = aluno.indexOf(nome);
        const mediaAluno = media[indice];

        console.log(`${nome} está cadastrado e sua média é: ${mediaAluno}!`);
    
    }else{
        console.log("Aluno não encontrado!");
    }
}
showAlunoNota("ezequiel");
