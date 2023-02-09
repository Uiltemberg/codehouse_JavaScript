let nome = prompt("Digite seu nome:");
let peso = prompt("Digite seu peso em kg:");
let altura = prompt("Digite sua altura em metros:");

let imc = peso / (altura * altura);

if (imc > 18.5 && imc < 24.9) {
  alert("Olá " + nome + ", seu IMC é " + imc.toFixed(2) + ". parabéns, você está dentro do peso normal.");
}
else{
  alert("Alerta! Seu IMC não é o ideal, procure um nutricionista")
}