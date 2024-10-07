import fs from "fs";

fs.readFile("numeros.txt", "utf8", (err, data) => {
  if (err) throw err;

  const numeros = data.split("\n").map((num) => parseInt(num, 10));

  const numerosPares = numeros.filter((numero) => numero % 2 === 0);

  console.log("Numeros pares:");
  console.log(numerosPares.join(", "));

  const paresContenido = numerosPares.join("\n");
  fs.writeFile("numeros_pares.txt", paresContenido, (err) => {
    if (err) throw err;
    console.log("Archivo numeros_pares.txt creado");
  });
});
