// index signatures

interface User2 {
  name: string;
  [index: string]: string | number | boolean;
}

const user: User2 = {
  name: "Kavin",
  age: "2",
  familyMembers: 10,
  isActive: true,
};
