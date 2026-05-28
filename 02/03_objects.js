//singleton => object.create
// object literals
const mySum=Symbol("key1")
const JsUser={
    name:"Kushagra",
    age:21,
    location: "Jaipur",
    "surName": "Sharma",
    [mySym]:"mykey1" //mySym:"mykey1" it is string but we need symbol 
}
console.log(JsUser.name);
console.log(JsUser["surName"]);
console.log(typeof JsUser.mySym);
console.log(JsUser[mySym]);
//we can overwrite
//Object.freeze(JsUser)
//No changes can happen now

JsUser.greeting=function(){
    console.log("Hello Js user");
}
console.log(JsUser.greeting);

JsUser.greetingTwo=function(){
    console.log(`Hello Js user, ${this.name}`);     //this
}
console.log(JsUser.greeting);
