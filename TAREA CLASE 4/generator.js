import fs from "fs";

const numeros = Array.from({ length: 1000 }, (_, i) => i + 1);

const contenido = numeros.join("\n");

fs.writeFile("numeros.txt", contenido, (err) => {
  if (err) throw err;
  console.log("Archivo numeros.txt creado");
});
