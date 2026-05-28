function add2Nos(no1,no2){
    console.log(no1+no2);
    
}//parameters
add2Nos(3,"a") //arguments

//but if we store it into a var it will eb undefied
const res=add2Nos(2,3)
console.log(res); //we have to return it to get the value
function add2Nos(no1,no2){
    return no1+no2
}
const resu=add2Nos(2,3)
console.log(resu);

function loginUser(username){
 return `${username} just logged in`
}
console.log(loginUser("Alice"));

function calculateCartPrice(...prices){   //rest operator ya spread operator same hai
    return prices

}
console.log(calculateCartPrice(100,200,300));

const user={
    name:"kushagra",
    price:999,}
function handleObject(anyObj){
    console.log(`Username is ${anyObj.name} and price is ${anyObj.price}`);
}
handleObject(user);
