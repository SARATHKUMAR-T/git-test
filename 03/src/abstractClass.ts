abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getSepia(): void;
  getReelTime(): number {
    return 8;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("sepia is 82e32ndwy");
  }
}

let sk = new Instagram("Portrait", "spot light", 10);
// console.log(sk instanceof TakePhoto);

let reeltime = sk.getReelTime();
console.log(reeltime);
