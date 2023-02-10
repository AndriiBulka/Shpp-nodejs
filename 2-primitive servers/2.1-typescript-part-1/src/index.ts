/** @format */

// 1.

function getFirstWord(a: string): number {
  return a.split(/ +/)[0].length;
}

// 2.
interface User {
  name: string;
  surname: string;
}
type UserFN = {
  fullname: string;
  initials: string;
};

function getUserNamings(a: User): UserFN {
  return {
    fullname: a.name + " " + a.surname,
    initials: a.name[0] + "." + a.surname[0],
  };
}

// 3.
type Product = {
  name: string;
};
interface Products {
  products?: Product[];
}
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining>
function getAllProductNames(a: Products): string[] {
  return a?.products?.map(prod => prod?.name) || [];
}

// 4.1
interface Person {
  name(): string;
  cuteness?: number;
  coolness?: number;
}

// easy way is using 'as' keyword
// hard way is ?...
function heyPerson(a: Person): string {
  return "hey! i'm " + a.name();
}
heyPerson({ name: () => "roma", cuteness: 100 });
heyPerson({ name: () => "vasya", coolness: 100 });

// 4.2
abstract class Pet {
  private petName: string;
  private type?: string;
  private cuteness?: boolean | number;
  private coolness?: boolean | number;
  constructor(petName: string, type?: string, cuteness?: boolean | number, coolness?: boolean | number) {
    this.petName = petName;
    this.type = type;
    this.cuteness = cuteness;
    this.coolness = coolness;
  }
  name(): string {
    return this.petName;
  }
}

class Cat extends Pet {
  constructor(name: string, cuteness: boolean, type?: string) {
    super(name, type, cuteness);
  }
}
class Dog extends Pet {
  constructor(name: string, coolness: number, type?: string) {
    super(name, type, coolness);
  }
}
function heyPet(abstractPet: Pet): string {
  return "hey! i'm " + abstractPet.name();
}
let a = new Cat("myavchik", true);
let b = new Dog("gavchik", 333);
heyPet(a);
heyPet(b);

// 4.3
interface IPet {
  name(): string;
  type: string;
  cuteness?: number;
  coolness?: number;
}

function hey(a: IPet): string {
  return "hey! i'm " + a.name() + (a.type === "cat" ? "cuteness: " + a.cuteness : "coolness: " + a.coolness);
}
hey({ name: () => "roma", type: "cat", cuteness: 100 });
hey({ name: () => "vasya", type: "dog", coolness: 100 });

// 5.

// google for Record type
function stringEntries(a: string[] | Record<string, any>): string[] {
  return Array.isArray(a) ? a : Object.keys(a);
}

// 6.

// you don't know Promises and async/await yet. Or do you?
// ....can be hard, don't worry and SKIP if you do not know how to do it

async function world(a: number): Promise<string> {
  return "*".repeat(a);
}
const hello = async () => {
  return await world(10);
};
hello()
  .then(r => console.log(r))
  .catch(e => console.log("fail"));
