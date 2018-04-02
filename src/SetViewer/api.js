const set = {
  id: 0,
  name: "Russia World Cup 2018",
  subsets: [
    {
      id: 0,
      name: "England",
      items: [
        { id: 321, name: "Wayne Rooney", count: 0 },
        { id: 322, name: "Harry Kane", count: 1 },
        { id: 323, name: "Jamie Vardy", count: 2 },
        { id: 324, name: "Raheem Sterling", count: 0 },
        { id: 325, name: "Joe Hart", count: 0 },
        { id: 326, name: "Jack Butland", count: 1 },
        { id: 327, name: "Fraser Forster", count: 0 },
        { id: 328, name: "Eric Dier", count: 0 },
        { id: 329, name: "Dele Alli", count: 0 },
        { id: 330, name: "England Badge", count: 0 },
        { id: 331, name: "Jamal Lascelles", count: 0 },
        { id: 332, name: "John Stones", count: 0 },
        { id: 333, name: "Gary Cahill", count: 0 },
        { id: 334, name: "Phil Jones", count: 0 },
        { id: 335, name: "Adam Lallana", count: 0 },
        { id: 336, name: "Jonjo Shelvey", count: 0 },
        { id: 337, name: "Jordan Henderson", count: 0 },
        { id: 338, name: "Theo Walcott", count: 0 },
        { id: 339, name: "Alex Oxlade Chamberlain", count: 0 }
      ]
    },
    {
      id: 1,
      name: "France",
      items: [
        { id: 421, name: "Hugo Lloris", count: 0 },
        { id: 422, name: "Raphael Varane", count: 1 },
        { id: 423, name: "Moussa Sissoko", count: 2 },
        { id: 424, name: "Yohan Cabaye", count: 0 },
        { id: 425, name: "Hatem Ben Arfa", count: 0 },
        { id: 426, name: "Oliver Giroud", count: 1 },
        { id: 427, name: "Karim Benzema", count: 0 },
        { id: 428, name: "Patrice Evra", count: 0 },
        { id: 429, name: "Paul Pogba", count: 0 },
        { id: 430, name: "France Badge", count: 0 }
      ]
    }
  ]
};

export default () =>
  new Promise(res => {
    setTimeout(() => res([set]), 50);
  });
