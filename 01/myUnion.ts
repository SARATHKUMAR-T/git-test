let score: number | string | boolean = 44;

score = false;

type User = {
  name: string;
  id: string;
};

type Admin = {
  userName: string;
  id: string;
};

let hitesh: User | Admin = {
  name: "Sarath",
  id: "343242",
};

hitesh = {
  userName: "Kumar",
  id: "3he32ei",
};

function getDbId(id: number | string) {
  console.log(`the db id si ${id}`);
}

getDbId(2);
getDbId("6");

// array

let data: number[] = [1, 2, 3, 4, 5];
let data1: string[] = ["1", "2", "3", "4"];
let data3: string[] | number[] = [1, 2, 3, 4];

// mixed type
let data4: (string | number | boolean)[] = [1, 2, 3, 4, "5", true];

// const values

let pi: 3.14 = 3.14;

let seatAlignment: "inner" | "middle" | "window";

seatAlignment = "inner";
