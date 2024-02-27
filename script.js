const facts = [
  "The average person walks the equivalent of three times around the world in a lifetime.",
  "The first oranges weren't orange.",
  "A flock of crows is known as a murder.",
  "A snail can sleep for three years.",
  "The shortest war in history lasted 38 to 45 minutes.",
  "Cows have best friends.",
  "The average person spends six months of their lifetime waiting for red lights to turn green.",
  "The Hawaiian alphabet has only 13 letters.",
  "Bananas are berries, but strawberries are not.",
  "The world's oldest known recipe is for beer."
];

function generateRandomFact() {
  const factElement = document.getElementById("fact");
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  factElement.textContent = randomFact;
}

const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generateRandomFact);
