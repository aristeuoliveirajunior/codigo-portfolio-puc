function avaliaParidade(limiteSuperior) {
  for (let i = 0; i < limiteSuperior; i++) {
    if (i % 2 == 1) console.log(i + " é um número IMPAR");
    else console.log(i + " é um número PAR");
  }
}

avaliaParidade(10);
