//console.log(2+ +5+ '2');//it will act as integer then concat with string
//console.log('2'+3 +5)// it will consider it as string

// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter);


// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// the results are not predictable- the main reason is equality check == and comparisons < > >=  work diffrently 
// comparison converts null to number , treating it as zero(0) i.e null>=0 is true ,and null >0 is false 

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// ===  strict check it check values as well as data types
//== here type conversiion will happen
// console.log('2' == 2);
// console.log("2" === 2);



/**
 * Memory in JS
 * 
 * stack (primitive) heap (non-primitive)
 * in stack we get copy  of the orginal  value where as in heap we get the refrence of actual value 
 */


let stay="banglore"

let PG=stay
console.log(PG);


let userOne={
    email:'sajid@gmail.com',
    id:1
}

let userTwo=userOne

userTwo.id=5

console.log(userOne,userTwo);