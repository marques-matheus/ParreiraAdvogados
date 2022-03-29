// const $nav = document.querySelector(".nav__conteudo");
// window.addEventListener("scroll", () => {
//     if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
//         $nav.style = "background-color: white; position: fixed; top: 0;  width: 100%;"

//     } else {
//         return
//     }
// });

const $botao = document.querySelector(".btn__menu");
const $lista = document.querySelector(".nav__lista--mobile");

let clicado = false;

$botao.addEventListener("click", () => {
  if (clicado === false) {
    clicado = true;
    $lista.style = "display: flex;";
  } else if (clicado === true) {
    clicado = false;
    $lista.style = "display: none";
  }
});