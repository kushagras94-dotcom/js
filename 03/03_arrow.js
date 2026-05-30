//function a(){
  //  console.log(this); //this.username only for object
//}
console.log(this);

const b = () => {
    let username="kush"
    console.log(this);
}

//arrow fn
const addTwo = (n1, n2) => {
    return n1+n2 //explicit return
}

const addOne = (n1,n2) => (n1+n2) //implicit no return keyword needed

// if return obj ({username:"kush"}) like this
