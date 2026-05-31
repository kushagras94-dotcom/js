
const obj={
    G1: 'Valorant',
    G2: 'RDR',
}
/*for(const [key, value] of obj){
    console.log(key, ':-', value);
} *///Not Working for obj

//forin
for (const key in obj) {
    console.log(obj[key]);
}
//also works same for array

//doesnot work on maps
