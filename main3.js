let numEntrada = prompt("Digite um número par");

while (numEntrada !== "Esc") {
  
  if (Number(numEntrada) % 2 === 0) {
    alert("Este é um número par.");
  } else {
    alert("Este número não é par.");
  }
  
  numEntrada = prompt("Digite outro número par ou digite 'Esc' para sair.");
}


