// falsy values
//false, 0,-0, BigInt 0n, null, undefined,NaN

//truthy values
//"0",'false', " ",{},[], function(){}

//eg. for array check arr.length ===0 =>empty
//eg. for objects Objects.keys(objename).length===0 => empty


//Nullish Coalescing Operator (??): null undefined

let val1;
val1=null ?? 10
console.log(val1);


//Terniary Operator
condition ? true:false
const price=100
price <=80 ? console.log("less") : console.log("more");

