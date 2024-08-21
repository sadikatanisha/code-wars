function bump(x) {
  return x.split("").filter((el) => el == "n").length > 15
    ? "Car Dead"
    : "Woohoo!";
}

console.log(bump("n"), "Woohoo!");
console.log(bump("__nn_nnnn__n_n___n____nn__nnn"), "Woohoo!");
console.log(bump("nnn_n__n_n___nnnnn___n__nnn__"), "Woohoo!");
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
console.log(bump("______n___n_"), "Woohoo!");
