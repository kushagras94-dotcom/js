//foreach never returns a value
const game=["Valorant", "RDR", "PoppyPlaytime"]
const values=game.forEach((item) => {
    //console.log(item);
    return item
})
console.log(values); 

const nums=[1,2,3,4,5,6,7,8,9,10]
const newNums=nums.filter((num) => num>4)
console.log(newNums);

//if paranthesis start kar diya then return mkeyword likhna pdega

//2nd method
const newn=[]
nums.forEach((num) =>{
    if(num>4){
        newn.push(num)
    }
})
console.log(newn);


//books.filter(() => )

 //const newNum=   nums.map((num) => num + 10)
//console.log(newNum);
 
//chaining
const newNum=nums
.map((num) => num*10)
.map((num) => num + 1)
.filter((num) => num>=40)


//reduce
//const tot = nums.reduce(function(acc, currval){
  //  return acc + currval``
//}, 0)

//console.log(tot);


//in arrow fn
//const tot=nums.reduce((acc, curr) => acc+curr, 0)


const shoppingCart=[
    {
        item: "js",
        price: 500
    },
    {
        item: "cpp",
        price: 600
    },
    {
        item: "go",
        price: 9900
    }

]
const bill=shoppingCart.reduce((acc,item) =>acc + item.price,0)

console.log(bill);
