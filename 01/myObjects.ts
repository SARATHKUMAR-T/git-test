// const User = {
//   name: "Kavin",
//   email: "kavin@gmail.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean = false }) {}

// createUser({ name: "aswin" });

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User) {}

type User = {
  name: string;
  email: string;
  isActive: boolean;
  readonly _id: string;
  creaditCardDetails?: number;
};

let myUser: User = {
  name: "Aswin",
  email: "a@h.com",
  isActive: false,
  _id: "ed3r3rr",
};

myUser.email = "aswin@gmail.com";

type CardNumber = {
  CardNumber: string;
};

type CardDate = {
  CardDate: string;
};

type CardDetails = CardNumber &
  CardDate & {
    cvv: number;
  };

let card1: CardDetails = {
  CardNumber: "wqduwed",
  CardDate: "dwdewewd",
  cvv: 8987,
};

export {};
