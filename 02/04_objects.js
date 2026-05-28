//const user=new Object()
//const user={}
//both are objects but first one is singleton 2nd is non singleton
//User.name="Kush"

const regularUser={
    fullname:{
        firstname:"ksuh",  //can be nested . . lga ke access
        secondname:"sharma"
    }
}
//2 objects
//const obj3=Object.assign({}, obj1, obj2) 
//const obj3={...obj1,...obj2} =>spread op just like arrays
 
//objects in array 

//when we need keys/values only => Object.keys(object1) as an array
//entries => every key and value in an array [[],[]] like this
//hasOwnPrroperty true/false

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructer:"Kushagra",
}
const {courseInstructer} =course// can be destructured like courseInstrructer into courseInstructer:Instructer
console.log(courseInstructer);

//--------------API-----------//
/*{
    "name":"kushagra",
    "coursename" : "js in hindi",

}*/
//api can be like array of objects