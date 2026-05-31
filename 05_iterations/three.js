const game=["valorant", "rdr", "callofduty"]
game.forEach( function (item){//no name needed
    console.log(item);
} )

game.forEach((val) => { //with arrow fn
    console.log(val);
})

//we can define fn elsewhere and use it like game.forEsch(fn)

//not only have item it has array and index also
game.forEach((val, index, arr) => { //with arrow fn
    console.log(val, index, arr);
})

//array+obj
const myGame = [
    {
        gameName: "Valorant",
        type: "FPP"
    },
    {
        gameName: "RDR",
        type: "Story"
    },
    {
        gameName: "Popppy",
        type: "Horrow Story"
    }
]
myGame.forEach((item) => {
    console.log(item.type);
    
})