let monArr = [
  "Zekrom",
  "Reshiram",
  "Oshawott",
  "Riolu",
  "Snivy",
  "Tepig",
  "Patrat",
  "Deino",
  "Axew",
  "Pikachu",
  "Lillipup",
  "Cobalion",
  "Virizion",
  "Terrakion",
  "Keldeo",
  "Taillow",
  "Unfezant",
  "Duosion",
  "Reuniclus",
  "Ducklett",
  "Swanna",
];

function getRandomMon() {
  let randomMon = monArr[Math.floor(Math.random() * monArr.length)];
  return randomMon;
}

console.log(getRandomMon());
