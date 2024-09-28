const prompt = require('prompt-sync')();

function fibCount(n) {
  const fib = [0, 1];
  while (fib[fib.length - 1] < n) {
      const next = fib[fib.length - 1] + fib[fib.length - 2];
      fib.push(next);
  }
  return fib;
}

function isFib(num) {
  const fibSequence = fibCount(num);
  if (fibSequence.includes(num)) {
      return `O número ${num} pertence.`;
  } else {
      return `O número ${num} não pertence.`;
  }
}

const userInput = prompt("Informe um número:");
const number = parseInt(userInput, 10);

if (!isNaN(number)) {
  const result = isFib(number);
  console.log(result);
} else {
  console.log("Por favor, insira um número  válido.");
}
