const name="Kush"
const age=21
console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName= new String('kushsh')
console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString=gameName.substring(0,4) //last value not inclu
console.log(newString);
const string2=gameName.slice(-4,2)
console.log(string2);
const spa="   kush   "
console.log(spa.trim());
const url="https://kush.com/kush%20sharma"
console.log(url.replace('%20','-'))
console.log(url.includes('shsh'));

console.log(gameName.split('-'));






