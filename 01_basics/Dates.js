let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log('JSON = ',myDate.toJSON());
// console.log(myDate.toTimeString());


// let myCreatedate=new Date(2024,0,23)
// let myCreatedate=new Date(2024,0,23,5,3)
/**
 * DD-MM-YYYY
 */
let myCreatedate=new Date("2024-01-23")


console.log(myCreatedate.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp,myCreatedate.getTime());

console.log(Math.floor(Date.now()/1000));


const newDate= new Date()

console.log(newDate.getDay());

console.log('is it working', newDate.toLocaleString('default',{
    weekday: 'short'
}))




