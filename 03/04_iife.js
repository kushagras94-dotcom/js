//Immediately Invoked Function Expression(IIFE)
//()() global scope se pollution 
(function a(){ //named iife is as a function
    console.log(`DB CONNECTED`);
})(); //semicolon needed to end invoked fn
((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("Kush") 