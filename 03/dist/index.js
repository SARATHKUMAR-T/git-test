"use strict";
// class User {
//   public name: string;
//   email: string;
//   private readonly city: string = "Trichy";
//   constructor(name: string, email: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// easier way
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this._courseCount = 1;
        this.city = "Trichy";
    }
    // private method
    deleteToken() {
        console.log("token deleted successfully!!!");
    }
    // setter without set
    setCourseCount(cn) {
        if (cn === 1) {
            throw new Error("Course count must be more than 1");
        }
        this._courseCount = cn;
        // this.deleteToken();
    }
    // getter
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    // getter for course count
    get getCourseCount() {
        return this._courseCount;
    }
    // setter for course count
    set courseCount(courseNum) {
        if (courseNum === 1) {
            throw new Error("Course count must be more than 1");
        }
        this._courseCount = courseNum;
    }
}
// creating sub user with inheritance from User
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isfamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
let res = new User("panda", "panda@gmail.com");
res.setCourseCount(10);
// res.courseCount = 3;
console.log(res.getCourseCount);
