interface User {
  name: string;
  email: string;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, np: number): string;
}

// Reopenning the interface
interface User {
  githubtoken?: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "newbie";
}

const sarath: Admin = {
  name: "Sarath",
  role: "admin",
  email: "sara@gmail.com",
  githubtoken: "edr3r4",
  startTrail: () => {
    return "hello world";
  },
  getCoupon: (name: "vkart", lot: 10) => {
    return "coupon accepted";
  },
};

export {};
