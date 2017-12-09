const fs = require('fs');

const arr = fs.readFileSync('d9.txt', 'utf8').replace(/!./g, "")
let level = 0;
// 1
console.log(arr.replace(/<([^>]*)>/g, "").split('').reduce((acc, el)=> {
	level += el === "{" ? 1 : el === "}" ?  -1 : 0;
	return el === "}" ? acc+level+1 : acc;
}, 0))

// 2
console.log(arr.match(/<(.*?)>/g).map(m => m.substring(1, m.length-1)).reduce((acc, e) => acc + e).length)