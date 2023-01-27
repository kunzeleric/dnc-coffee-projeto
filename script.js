//Aparecer botões de comprar nos cards

//let botao = null;
let cards = Array.from(document.querySelectorAll(".card"));
let buttons = Array.from(document.querySelectorAll('.comprar'));

cards.forEach((element, index) => {
    
  element.addEventListener("mouseenter", () => {
//    if (botao !== null) {
//      botao.remove();
//    }
    buttons[index].style.visibility = "visible";
    buttons[index].style.height = "auto";

    //botao = document.createElement("div");
    //botao.innerHTML = `<button class="comprar">COMPRAR AGORA</button>`;
    //element.append(botao);
  });

  element.addEventListener("mouseleave", () => {
    //botao.remove();
    buttons[index].style.visibility = "hidden";
    buttons[index].style.height = "0";
 });

});

//Modal do botão Atendimento
let modalCard = null;
let modal = document.querySelector('#modal')
let modalPlace = document.querySelector('#modalPlace');

modal.addEventListener("click", () => {

    if(modalCard !== null) {
        modalCard.remove();
    }

    modalCard = document.createElement("div");
    modalPlace.style.visibility = 'visible';

    modalCard.innerHTML = `<div class="modalAtendimento">
    <button><img src="assets/images/close-btn.png" onClick="closeModal()"></button>
    <h1>Atendimento</h1>
    <p>Rua José de Alencar, 111, Centro<br>
    CEP: 12209-000 | +55 (11) 3333-8000</p>
     <button>ENTRAR EM CONTATO</button>
    <div>`

    modalPlace.append(modalCard)

});

closeModal = () => {
  modalPlace.style.visibility = 'hidden';
}