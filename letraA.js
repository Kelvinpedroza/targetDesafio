function contarA(str) {
  let contador = 0; 

  for (let i = 0; i < str.length; i++) {
      if (str[i] === 'a' || str[i] === 'A') {
          contador++;
      }
  }

  console.log(`A letra 'a' ocorre ${contador} vez`);
}


const minhaString = "Borboleta";
contarA(minhaString);
