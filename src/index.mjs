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

// CRIAR A FUNÇÃO - refatorar ou melhorar
function calcular() {
  const n1 = Number(numero1.value); //CONVERSÃO P/ NUMBER
  const n2 = Number(numero2.value); //CONVERSÃO P/ NUMBER
  soma.innerHTML = `A soma de ${n1} e ${n2} é: ${n1 + n2}`;
  subtracao.innerHTML = `A subtracao de ${n1} e ${n2} é: ${n1 - n2}`;
  multiplicacao.innerHTML = `A multiplicacao de ${n1} e ${n2} é: ${n1 * n2}`;
  divisao.innerHTML = `A divisao de ${n1} e ${n2} é: ${n1 / n2}`;

  //return res
}
calcular();

// ADICIONAR ESCUTADOR DE EVENTOS
btnCalcular.addEventListener("click", function (evento) {
  alert(calcular());
});
