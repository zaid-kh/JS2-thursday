const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];
function getNames() {
  return data.map((person) => person.name);
}
console.log("getNames: " + getNames());

function getBornBefore(date) {
  return data.filter(
    (person) => Number.parseInt(person.birthday.split("-")[2]) < date
  );
}
console.log(
  "getBornBefore(1990): ",
  JSON.stringify(getBornBefore(1990), null, 1)
);

function getFoodOccurences() {
  let food = {};
  data.forEach((person) => {
    // if exists, increment ,, else add with occurance =1
    person.favoriteFoods.fish.forEach((fish) => {
      if (Object.hasOwn(food, fish)) {
        food[fish]++;
      } else food[fish] = 1;
    });
    person.favoriteFoods.meats.forEach((meat) => {
      if (Object.hasOwn(food, meat)) {
        food[meat]++;
      } else food[meat] = 1;
    });
  });
  return food;
}

console.log(
  "getFoodOccurences(): ",
  JSON.stringify(getFoodOccurences(), null, 1)
);
