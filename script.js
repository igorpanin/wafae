const cities = [
  "Tallinn",
  "Tartu",
  "Narva",
  "Pärnu",
  "Kohtla-Järve",
  "Viljandi",
  "Rakvere",
  "Maardu",
  "Sillamäe",
  "Valga",
  "Võru",
  "Jõhvi",
  "Haapsalu",
  "Keila",
  "Kiviõli",
  "Tapa",
  "Põlva",
  "Jõgeva",
  "Türi",
  "Elva",
  "Rapla",
  "Saue",
  "Põltsamaa",
  "Paldiski",
  "Sindi",
  "Kunda",
  "Kärdla",
  "Räpina",
  "Narva-Jõesuu",
  "Tõrva",
  "Karksi-Nuia",
  "Püssi",
  "Loksa",
  "Kehra",
  "Kilingi-Nõmme",
  "Otepää",
  "Kuressaare",
  "Kallaste",
  "Käina",
  "Mustvee",
  "Lihula",
  "Antsla",
  "Abja-Paluoja",
  "Suure-Jaani",
  "Võhma",
  "Kohila",
  "Mõisaküla",
  "Tamsalu",
  "Nõo",
  "Saku",
  "Tõstamaa",
  "Kuusalu",
  "Põhja-Sakala",
  "Ruhnu",
  "Märjamaa",
  "Viimsi",
  "Muhu",
  "Alatskivi",
  "Väike-Maarja",
  "Kanepi",
  "Vinni",
  "Kambja",
  "Lääne-Nigula"
];

const wines = [
  "Cabernet Sauvignon",
  "Merlot",
  "Pinot Noir",
  "Syrah",
  "Zinfandel",
  "Chardonnay",
  "Sauvignon Blanc",
  "Pinot Grigio",
  "Riesling",
  "Gewurztraminer"
];

function randomize() {
  const cityElement = document.getElementById("city");
  const wineElement = document.getElementById("wine");

  // Choose a random city
  let cityIndex = Math.floor(Math.random() * cities.length);
  let city = cities[cityIndex];
  cities.splice(cityIndex, 1); // Remove chosen city from array to avoid duplicates

  // Choose a random wine
  let wineIndex = Math.floor(Math.random() * wines.length);
  let wine = wines[wineIndex];

  // Update the HTML elements
  cityElement.innerText = " " + city;
  wineElement.innerText = " " + wine;
}
