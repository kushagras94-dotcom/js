//Primitive => 7 types

const { useInsertionEffect } = require("react")

/*number 
string
boolean
null
undefined
symbol
BigInt*/
const id=Symbol('123')
const idd=Symbol('123')
console.log(id===idd)


//reference(non primitive) => array, objects, function

const name=["k", "s"]
let myObj={
    name: "Kushagra",
    age:22,
}
const myFunction=function(){
    console.log("hey")
}
//typeof of non primitives are objects

//**************************************************
//  stack(prrimitive)
//heap(non primitive)
let name="kush"
let name1=name
name1="sharma"
console.log(name);
console.log(name1);
// copy banti h likke stack
let userOne={
    email: "Kush@google.com"
}
let userTwo=userOne
userTwo.email="sh@googl"
console.log(userOne.email); //dono me change
console.log(userTwo.email);
