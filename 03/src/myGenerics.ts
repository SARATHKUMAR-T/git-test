// let score: number[] = [];
const score: Array<number> = [];

const names: Array<string> = [];

function IdentityOne(val: boolean | number): boolean | number {
  return val;
}

function IdentityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree("sarath");

interface Bottle {
  brand: string;
  material: string;
}

function identityFour<Bottle>(val: Bottle): Bottle {
  return val;
}

identityFour({});

function getSearchProducts<T>(products: T[]): T {
  return products[3];
}

// converting to arrow function

const getMoreProducts = <T>(products: T[]): T => {
  return products[4];
};

interface DataBase {
  connection: string;
  user: string;
  password: string;
}

function anotherFunction<T, U extends DataBase>(num: T, num2: U): object {
  return {
    num,
    num2,
  };
}

// anotherFunction(2, 3);

interface Quizz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  authour: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];
  addTocart(product: T) {
    this.cart.push(product);
  }
}
