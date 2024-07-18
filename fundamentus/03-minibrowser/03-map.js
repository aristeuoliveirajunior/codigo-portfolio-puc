var novoMapa = new Map();

novoMapa.set("11/11/2011 - 23:30", { title: "titulo do site", url: "sozinha" });
novoMapa.set("11/11/2011 - 23:30", {});
novoMapa.set("11/11/2011 - 23:30", {});

var resultado = novoMapa.get("11/11/2011 - 23:30");
console.log(resultado);
