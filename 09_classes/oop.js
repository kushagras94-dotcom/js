const user={
    username: "Kushagra",
    loginCount: 8,
    signedIn: true ,
    getUserDetails: function(){
        console.log("got the user details from db");
        console.log(`${this.username}`);//need to use this for telling it that we are using our username
        console.log(this);
        
        
        
    }

}
console.log(user.username);
console.log(user.getUserDetails());

console.log(this);//empty in node envir
//but in browser we have so many things(window object)


//const promiseOne = new Promise() //new-> constructor fn

function User(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting =function(){
        console.log(`Welcome ${this.username}`);
        
    }

    //return this(not needed)

}
/*const userOne=User("Kush", 12, true)
const userTwo=User("aman", 7, false)
console.log(userOne);*/
//but ye to overwrite hogya even mene userone print krwaya
//therefore we use 'new' keyword
const userOne=new User("Kush", 12, true)
const userTwo=new User("aman", 7, false)
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);
