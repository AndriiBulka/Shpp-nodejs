// Напишите функцию mapObject, которая
// в чем-то очень похожа на функцию map для массивов.

// Эта функция должна принимать объект джаваскрипта
// и функцию transformer, которую нужно применить к каждому из полей того объекта,
// ...а из результата применения функции transformer к каждому полю входящего объекта
// собрать новый объект и вернуть его.

// Так например можно будет замэппить объект типа
// { "roma" : 5, "vasya": 2 } оценок студентов
// на функцию вроде (x) => x > 2
// чтобы получить объект
// { "roma": true, "vasya": false } зачетов студентов

// Понятное дело для описания сигнатуры mapObject надо будет юзать
// 1) дженерики с несколькими параметрами-типами
// 2) такую штуку как Record (globalThis.Record, если быть точным ;) )
function mapObject<T extends Record<string, any>, O>(record: T, transformer: (arg: T[keyof T]) => O): Record<string, O> {
  const transformedObj: Record<string, O> = {} as Record<string, O>
  for (const prop in record) {
    transformedObj[prop] = transformer(record[prop])
  }
  return transformedObj
}
let o: Record<string, number> = { roma: 5, vasya: 2 }
let f = (x: number) => x > 2

let result = mapObject(o, f)
console.log(result)
