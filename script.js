/*
OBJETIVO - quando clicar no botão temos que mostrar a imagem de fundo correspondente
    
passo 1 - pegar o elemento HTML dos botões
passo 2 - identificar o clique do usuário no botão
passo 3 - desmarcar o botão selecionado anterior
passo 4 - marcar o botão clicado como se estivesse selecionado
passo 5 - esconder a imagem anteriormente selecionada
passo 6 - fazer aparecer a imagem correspondente ao botão clicado
passo 7 - esconder a informação do dragão anteriormente selecionado
passo 8 - mostrar a informação do dragão referente ao botão clicado
*/

// passo 1 - pegar o elemento HTML dos botões
const carouselButtons = document.querySelectorAll(".button");
const images = document.querySelectorAll(".image");
const infos = document.querySelectorAll(".info");

// passo 2 - identificar o clique do usuário no botão
carouselButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // passo 3 - desmarcar o botão selecionado anterior
    const selectedButton = document.querySelector(".selected");
    selectedButton.classList.remove("selected");

    // passo 4 - marcar o botão clicado como se estivesse selecionado
    button.classList.add("selected");

    // passo 5 - esconder a imagem anteriormente selecionada
    const activeImage = document.querySelector(".image.active");
    activeImage.classList.remove("active");

    // passo 6 - fazer aparecer a imagem correspondente ao botão clicado
    images[index].classList.add("active");

    // passo 7 - esconder a informação do dragão anteriormente selecionado
    const activeInfo = document.querySelector(".info.active");
    activeInfo.classList.remove("active");

    // passo 8 - mostrar a informação do dragão referente ao botão clicado
    infos[index].classList.add("active");
  });
});