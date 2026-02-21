function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);
         


// it synchronous code  where the code run line by line..

/*
What Does "Sync" Mean?

There are 2 versions in Node.js:

1️⃣ readFileSync() → Synchronous

Blocks the program

Waits until file is fully read

Then moves to next line



2️⃣ readFile() → Asynchronous

Does NOT block

Reads file in background

Uses callback function

*/