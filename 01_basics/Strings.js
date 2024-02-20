// const name='sajid';
// const repoCount=90;

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
/**
 * string is an object in java script that contain a lot of in built methods
 */


const gameName = new String('sajid-hussain-coder')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));

const newString =gameName.substring(0,3)
console.log(newString);


const anotherString=gameName.slice(0,4)
console.log(anotherString);

const temp='    hussain   '
console.log(temp);
console.log(temp.trim());

const url='http://sajid.com/sajid%20hussain'
console.log(url.replace('%20','-'));

console.log(url.includes('sajid'));

console.log(gameName.split('-'));