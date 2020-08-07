// Falsy value 
// 0
// ""
// undefined
// null
// NaN


// Truthy
// '0', " ", [], {}, 'false'

let name = 12;
console.log(name || name == 0);

if(name){
    console.log("condition is true");
}else{
    console.log("condition is false");
}