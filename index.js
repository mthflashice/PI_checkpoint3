// Passo 1 = função construtora
function Aluno(paramNome, paramQuantidadeDeFaltas, paramNotas) {
    (this.nome = paramNome),
      (this.quantidadeDeFaltas = paramQuantidadeDeFaltas),
      (this.notas = paramNotas),
      // Passo 2 = Método calcular média
      (this.calcularMedia = function () {
        let soma = 0;
        let quantidadeNotas = 0;
        for (let i = 0; i < paramNotas.length; i++) {
          soma += paramNotas[i];
          quantidadeNotas++;
        }
        let media = soma / quantidadeNotas;
        return media;
      });
    this.faltas = function () {
      this.quantidadeDeFaltas++;
    };
  }
  
  let aluno1 = new Aluno("Lucas", 4, [8, 8, 8]);
  let aluno2 = new Aluno("Debora", 0, [10, 5, 4]);
  let aluno3 = new Aluno("Giovani", 0, [5, 5, 5]);
  let aluno4 = new Aluno("João", 1, [5, 7, 10]);
  let aluno5 = new Aluno("Simone", 0, [10, 10, 10]);
  let aluno6 = new Aluno("Mateus", 0, [9, 8, 9]);
  let aluno7 = new Aluno("Pedro", 1, [0, 8, 0]);
  let aluno8 = new Aluno("Soraia", 3, [8, 8.5, 7]);
  
  
  // Passo 3 = crie o objeto literal curso
  let curso = {
    nomeCurso: "CTD",
    notaAprovacao: 7,
    faltasMaximas: 3,
    listaEstudantes: [
      aluno1,
      aluno2,
      aluno3,
      aluno4,
      aluno5,
      aluno6,
      aluno7,
      aluno8
    ],
    // Passo 4 = criar metodo adicionar alunos
    adicionarAluno(aluno) {
      curso.listaEstudantes.push(aluno);
    },
    // Passo 5 = criar metodo para saber se o aluno foi aprovado
    situacaoAluno(aluno) {
      if (
        aluno.calcularMedia() >= this.notaAprovacao &&
        this.faltasMaximas > aluno.quantidadeDeFaltas
      ) {
        return true;
      } else if (
        aluno.calcularMedia() >=
          this.notaAprovacao + this.notaAprovacao / 10 &&
        this.faltasMaximas >= aluno.quantidadeDeFaltas
      ) {
          return true
      }else{
          return false
      }
    },
    // Passo 6 = percorrer array com situação de aprovação
    situacaoDosAlunos(){
      let quadroResultados = []
      for(let i = 0; i < this.listaEstudantes.length; i++){
          quadroResultados.push(this.situacaoAluno(this.listaEstudantes[i]))
      }
      return quadroResultados
    }
  };
  
