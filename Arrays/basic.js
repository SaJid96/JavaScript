/**
 * Array creates a shallow copy rather than deep copy .
 * array is an object 
 */

// syntax
// const myArr=[1,2,34,5,6]
// const heros=['flash','batman','HULK']
// const  myArr2= new Array(1,4,5,6,7,8,5,4)

// console.log(myArr[3],he9ros[1],myArr2[5]);

// Array methods

// myArr.push(9)
// console.log(myArr);
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(5));
// console.log(myArr.indexOf(5));

// const newArr=myArr.join() 
//it converts array to string

// console.log(myArr, 'JOIN', newArr);

// const myn1=myArr.slice(1,3);
// console.log(myArr,'slice', myn1);
// const myn2=myArr.splice(1,3);

// console.log(' splice', myArr);



const dc_heros=['flash' , 'batman','wonder woman'];
const marvel_heros=['LOKI','DeadPool' , 'HULK' , 'Thor', ...dc_heros];

// const allHeros= marvel_heros.concat(dc_heros)
console.log(marvel_heros);

/**
 * alternate to concat , we can use spread operator 
 */

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));


console.log(Array.isArray('sajid'));
console.log(Array.from('sajid'));
