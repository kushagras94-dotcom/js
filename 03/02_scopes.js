let a=20
const b=30
var c=40 // var is function scoped global, let and const are block scope
// we dont use var in modern js, it is legacy and has some issues with scoping

function one(){
    const username="kush"


    function two(){
        const website="yt"
        console.log(username)}
        //console.log(website)
    two()
}

//if we are hoisting functions then we can call them before they are defined, but if we are hoisting variables as functions then we cannot call them before they are defined
