// INÍCIO DO PROJETO CALCULADORA HTML/CSS/JS
// REFERENCIAR ELEMENTOS COM JS
const app = document.querySelector("#app");
const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const btnCalcular = document.querySelector("#btn-calcular");
const resultados = document.querySelector(".resultados");
const soma = document.querySelector(".soma");
const subtracao = document.querySelector(".subtracao");
const multiplicacao = document.querySelector(".multiplicacao");
const divisao = document.querySelector(".divisao");
const btnLimpar = document.querySelector("#btn-limpar");

// CRIAR A FUNÇÃO - refatorar ou melhorar
function calcular() {
  const n1 = Number(numero1.value); //CONVERSÃO P/ NUMBER
  const n2 = Number(numero2.value); //CONVERSÃO P/ NUMBER
  soma.innerHTML = `A soma de ${n1} e ${n2} é: ${n1 + n2}`;
  subtracao.innerHTML = `A subtracao de ${n1} e ${n2} é: ${n1 - n2}`;
  multiplicacao.innerHTML = `A multiplicacao de ${n1} e ${n2} é: ${n1 * n2}`;
  divisao.innerHTML = `A divisao de ${n1} e ${n2} é: ${n1 / n2}`;
  //MANIPULANDO DOM COM JAVACRIPT
  resultados.classList.add("mostrar");
  resultados.classList.remove("esconder");

  //return res
}
function limparFormulario() {
  const n1 = numero1.value; // REFERENCIA numero1
  const n2 = numero2.value; // REFERENCIA numero2
  if (n1 && n2) {
    const form = document.querySelector("form");
    form.reset(); // LIMPA O FORMULARIO
    document.querySelector("#numero1").focus(); // FOCA NO N1
  }
}

// ADICIONAR ESCUTADOR DE EVENTOS
btnCalcular.addEventListener("click", function (evento) {
  evento.preventDefault(); // DEIXA DE ATUALIZAR...
  calcular();
});

btnLimpar.addEventListener("click", function (evento) {
  evento.preventDefault();
  limparFormulario();
});
