const a = 2 ;

const b = 5 ;

console.log(a);
console.log(b);


function callback (){
    console.log (a+b);

}

setTimeout(callback, 1000);


function mv () {
    console.log(a-b);
}

setTimeout( mv, 2000);







