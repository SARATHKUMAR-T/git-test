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
  protected _courseCount = 1;
  readonly city: string = "Trichy";
  constructor(public name: string, public email: string) {}

  // private method
  private deleteToken() {
    console.log("token deleted successfully!!!");
  }

  // setter without set
  setCourseCount(cn: number) {
    if (cn === 1) {
      throw new Error("Course count must be more than 1");
    }
    this._courseCount = cn;
    // this.deleteToken();
  }

  // getter
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  // getter for course count
  get getCourseCount(): number {
    return this._courseCount;
  }

  // setter for course count
  set courseCount(courseNum: number) {
    if (courseNum === 1) {
      throw new Error("Course count must be more than 1");
    }
    this._courseCount = courseNum;
  }
}

// creating sub user with inheritance from User
class SubUser extends User {
  isfamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

let res = new User("panda", "panda@gmail.com");
res.setCourseCount(10);

// res.courseCount = 3;
console.log(res.getCourseCount);
