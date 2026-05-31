//for
//break and continue
//while
//do while

// for of
["","",""]
[{},{},{}]

const arr = [1,2,3,4,5]
for(const i of arr){
    console.log(i);
}
const time="Five Fifty"
for(const i of time){
    console.log(`Each char is ${i}`);
}

//Maps
const map=new Map()
map.set('IN', "India")
map.set('UK', "United Kingdom")
map.set('IN', "India")
console.log(map);

for(const [key, value] of map){
    console.log(key, ':-', value);
}

