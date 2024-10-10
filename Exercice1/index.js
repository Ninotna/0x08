function pairNumbers(min, max) {
  let array = [];
  let str = "";
  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      // console.log(i);
      array.push(i);
    }
  }
  str = array.join(",");
  console.log(str);
  return str;

}

// Appel de la fonction pour tester
pairNumbers(1, 10); // Cela doit afficher les nombres pairs entre 1 et 10

export default pairNumbers;
