export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

//se usa Set porque no repite valores, no tiene index, se generan de forma aleatoria, busca solo en la palabra elegida y no en todo el array, ocupa menos memoria
export const generateWordSet = async (bank) => {
  let wordSet;
  let todaysWord;
  await fetch(bank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      wordSet = new Set(wordArr);
    });
  return { wordSet, todaysWord };
};
