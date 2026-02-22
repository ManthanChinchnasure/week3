const a = 1
const b = 2

console.log(a);
console.log(b);

let beforeTime = Date.now();
for (let i=0; i<100000000; i++){
    let currentTime = Date.now();
    if(currentTime - beforeTime>= 1000){
        break;
    }

}

console.log(a+b);