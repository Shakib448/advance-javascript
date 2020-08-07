let bonus = 20; // Global variable

function sum (first, second){
    let result = first + second + bonus; // scope variable 
    if(result > 9){
        let mood = "happay";
        mood = "fishy";
        mood = "funky"
        console.log(mood);
    }
    return result;
}

const output = sum(3, 8);
console.log(output);