const fs = require("fs");

const mv = fs.readFileSync("a.txt", "utf-8");
console.log(mv);




// where a readFileSync why use of the capital letter of filesync captil letter?

/*
This style is called:

👉 Camel Case

In camelCase:

First word → small letter

Next words → start with capital letter

So:

readFileSync
= read + File + Sync

Node.js combines multiple words into one method name using camelCase.

Why Not readfilesync?

If it was:

readfilesync

It would be hard to read.

But:

readFileSync

Is clear:

read → action

File → object

Sync → type (synchronous)

*/








// const fs = require("fs");

// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);
