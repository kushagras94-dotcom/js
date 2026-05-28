//if push then in existing arr
const arr1=[1,2,3]
const arr2=[9,6,1]
//arr1.push(arr2)
console.log(arr1);
const arr=arr1.concat(arr2)
console.log(arr);

const allarr=[...arr1, ...arr2]
console.log(allarr);

//for spread out array arr.flat(infinity)
const he=[1,[23,3],[34,[4,5]]]
const hehe=he.flat(Infinity)
console.log(hehe)
;

//Array.isArray("kush")=>false
//Array.from("kush")=>['k',...]

console.log(Array.from({name: "kush"})); //interesting ===key or value ki
//Array.of(s1,s2,s3)