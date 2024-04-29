"use strict";
// let score: number[] = [];
const score = [];
const names = [];
function IdentityOne(val) {
    return val;
}
function IdentityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree("sarath");
function identityFour(val) {
    return val;
}
identityFour({});
function getSearchProducts(products) {
    return products[3];
}
// converting to arrow function
const getMoreProducts = (products) => {
    return products[4];
};
function anotherFunction(num, num2) {
    return {
        num,
        num2,
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addTocart(product) {
        this.cart.push(product);
    }
}
