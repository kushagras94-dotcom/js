// let myName="kush     "
// console.log(myName.trueLength);



let myHeros = ["thor", "spiderman"]
let heroPower={
    thor: "hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.kushagra = function(){
    console.log(`kushagra is present in all obj`);
    
}
Array.prototype.sharma = function(){
    console.log(`Sharma says hello`);
    
}

//heroPower.kushagra()
//heroPower.sharma()
myHeros.sharma() 
// array ko power di but obj ko passout nhi hui

//inheritance


const Teacher={
    makeVideo: true
}
const TeachingSupport={
    isAvailable: false
}
const TASupport={
    makeAssignment:'JS assign',
    fullTime: true,
    __proto__:TeachingSupport
}
//inside awa outside
Teacher.__proto__=heroPower

//mpdern syntax
//this methid also
Object.setPrototypeOf(TeachingSupport,Teacher)


const s="Valorant    "

String.prototype.trueLength=function(){
    //console.log(`${this.name}`);
    console.log(`${this}`);
    
    console.log(`True length is ${this.trim().length}`);
    
    
}
s.trueLength()

"Red  dead".trueLength()