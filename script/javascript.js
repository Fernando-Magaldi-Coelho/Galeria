    var ImgAtual = 1; //variavel imagem
    var ImgTotal = 5; //variavel total de imagem

    function ImagemVirarGrande(imageId) { //funcçao para a imagem grande com o ImageId para pegar os iDs com que a imagem foi clicada 
      var pequeno = document.getElementById("bloco" + imageId + "-P"); //variavel pequeno vai pegar pelo id P ali imageId com a imagem clicada
      var grande = document.getElementById("bloco" + imageId + "-G"); // variavel grande é igual o botao anterior bloco G imagem grande no caso com a imagem clicada 
      var botaovoltar = document.getElementById("botao-voltar"); // botão voltar pega o botão criado pelo id
      var botaoAnt = document.getElementById("anterior-button"); // botao anterior pega o botão criado com o iD
      var botaoProx = document.getElementById("proximo-button"); //botao proximo pega o botão criado com o iD

      pequeno.style.display = "none";    //faz com que nenhum desses botões apareçam sem estar com a imagem grande
      grande.style.display = "block";
      botaovoltar.style.display = "block";
      botaoAnt.style.display = "block";
      botaoProx.style.display = "block";

      ImgAtual = imageId;
    }

    function ImagemVirarPequena() {
      var pequeno = document.getElementById("bloco" + ImgAtual + "-P"); //a mesma coisa da de cima só que inverso ele vai pegar a imagem atual vai verificar a imagem atual e verificar se ele foi clicada
      var grande = document.getElementById("bloco" + ImgAtual + "-G"); // mesma coisa da de cima porem com a imagem grnde no lugar 
      var botaovoltar = document.getElementById("botao-voltar");
      var botaoAnt = document.getElementById("anterior-button");
      var botaoProx = document.getElementById("proximo-button");

      pequeno.style.display = "block";
      grande.style.display = "none";

      botaovoltar.style.display = "none";
      botaoAnt.style.display = "none";
      botaoProx.style.display = "none";
    }

    function ImgAnt() { //função para o botão imagem anterior 
      var ImgAnterior = ImgAtual - 1; //vai "criar" uma imagem anterior vai ser a imagem atual -1 ou seja "a de tras"
      if (ImgAnterior < 1) {
        ImgAnterior = ImgTotal;
      } // se a imagem anterior foi menor que a anterior vai ser igual a imagem total
      ImagemVirarPequena(); // ele precisa disso para raciocinar onde voltar 
      ImagemVirarGrande(ImgAnterior); // vai pegar a imagem grande anterior 
    }

    function ImgProx() {
      var ImgProxima = ImgAtual + 1;

      if (ImgProxima > ImgTotal) {
        ImgProxima = 1;
      }
      ImagemVirarPequena();
      ImagemVirarGrande(ImgProxima);
    }

    function Voltar() { //imagem voltar vai voltar para as imagens pequenas
      ImagemVirarPequena();
    }