const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(kitten) {
  kittens.push(kitten);
  return kittens;
}

function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten);
  return kittens;
}

function destructivelyRemoveLastKitten(kitten) {
  kittens.pop(kitten);
  return kittens;
}
function destructivelyRemoveFirstKitten(kitten) {
  kittens.shift(kitten);
  return kittens;
}