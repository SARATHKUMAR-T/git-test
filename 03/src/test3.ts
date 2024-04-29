abstract class Insta {
  constructor() {}
  abstract getPost(): void;
}

class FaceBook extends Insta {
  constructor() {
    super();
  }
  getPost() {
    console.log("post something");
  }
}

const snap = new FaceBook();
console.log(snap);
