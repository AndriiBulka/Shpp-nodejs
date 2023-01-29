const text = `44.38,34.33,Алушта,31440,
49.46,30.17,Біла Церква,200131,
49.54,28.49,Бердичів,87575,#некоммент

#
46.49,36.58,#Бердянськ,121692,
49.15,28.41,Вінниця,356665,
#45.40,34.29,Джанкой,43343,

# в этом файле три строки-коммента :)
`;
/**
 * Задача: сделать функцию, которая принимает текст в формате CSV,
 *  а возвращает функцию, которая будет принимать на вход любой текст,
 *  и заменять в нём названия городов
 * на строку вида "название города (Х место в ТОП-10 самых крупных городов Украины, население УУУУУУ человек)".
 * */
function parseСsv(text) {
  const cities = text
    .split("\n")
    .filter((s) => /^[^#\s]/.test(s))
    .map((str) => ({
      x: +str.split(",")[0],
      y: +str.split(",")[1],
      name: str.split(",")[2],
      population: str.split(",")[3],
    }))
    .sort((city1, city2) => city2.population - city1.population)
    .slice(0, 10)
    .reduce((acc, obj, index) => {
      acc[obj.name.replace("#", "")] = {
        population: obj.population,
        rating: ++index,
      };
      return acc;
    }, {});

  return (text) => {
    const regex = new RegExp(Object.keys(cities).join("|"), "g");

    return text.replace(
      regex,
      (city) =>
        `${city} ( ${cities[city].rating}  місце в ТОП - 10 найбішльших міст України із населенням ${cities[city].population} ) `
    );
  };
}

const fn = parseСsv(text);
const testTxt =
  "Згодом отримало сучасне найменування Бердичів, яке походить від розташування у гирлі річки Берда";
console.log(fn(testTxt));
console.log(fn("Біла Церква"));
console.log(fn("Алушта і ще раз Алушта"));
