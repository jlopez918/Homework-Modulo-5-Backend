function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Error: No se puede dividir por cero.";
  }
  return a / b;
}

function calcular() {
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    console.log("Uso: node calculadora.js [número1] [operación] [número2]");
    console.log("Ejemplo: node calculadora.js 5 + 3");
    return;
  }

  const numero1 = parseFloat(args[0]);
  const operacion = args[1];
  const numero2 = parseFloat(args[2]);

  if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Error: No son números válidos.");
    return;
  }

  let resultado;
  switch (operacion) {
    case "+":
      resultado = sumar(numero1, numero2);
      break;
    case "-":
      resultado = restar(numero1, numero2);
      break;
    case "*":
      resultado = multiplicar(numero1, numero2);
      break;
    case "/":
      resultado = dividir(numero1, numero2);
      break;
    default:
      console.log("Operación no válida. Usa +, -, * o /.");
      return;
  }

  console.log(`Resultado: ${resultado}`);
}

calcular();
