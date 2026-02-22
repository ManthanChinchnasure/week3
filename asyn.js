const fs = require("fs");

function fileReadCallback(err,content) {     // why use of err in it"?
    console.log(content)
}


/*
Why err is Used?

When reading a file:

Two things can happen:

✅ 1. File read successfully

Then:

err → null

content → file data

❌ 2. Error occurs (file not found, permission issue, etc.)

Then:

err → contains error object

content → undefined



/////////////////////
🔥 Simple Real-Life Example

Imagine ordering food:

If food not available → waiter tells problem (error)

If available → waiter gives food (data)

So err is like:
👉 “Something went wrong”



*/


fs.readFile("a.txt", "utf-8", fileReadCallback);          // here a funcation argument ha sbeen used..
                                                        // 

let s = 0 ;
for (let i=0; i< 10000; i++ ) {
        s += i

}

console.log(s);


/*

Because:

1️⃣ fs.readFile() is asynchronous

It does NOT wait for the file to finish reading.

Node.js sends the file-reading task to the background and continues executing the next lines of code.

So this happens:

1. Start reading a.txt (in background)
2. Run for loop
3. Print sum (s)
4. When file reading completes → run callback → print content

*/