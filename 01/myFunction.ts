function addTwo(num: number): number {
  return num + 2;
}

addTwo(12);

const signUp = (user: string, email: string, isPaid: boolean = false) => {
  console.log(user);
};

signUp("Kavin", "kavin@gmail.com");

const heros: string[] = ["Thor", "Panther", "Groot"];
heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleErr(errormsg: string): void {
  console.log(errormsg);
}

function handleErr(errormsg: string): never {
  throw new Error(errormsg);
}

export {};
