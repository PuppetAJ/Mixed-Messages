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

const monFactory = () => {
  return {
    mon: getRandomMon(),
    level: Math.floor(Math.random() * 100),
    shiny: Math.random() < 0.1,
    IVs: {
      hp: Math.floor(Math.random() * 32),
      atk: Math.floor(Math.random() * 32),
      def: Math.floor(Math.random() * 32),
      spa: Math.floor(Math.random() * 32),
      spd: Math.floor(Math.random() * 32),
      spe: Math.floor(Math.random() * 32),
    },
  };
};

console.log(monFactory());
