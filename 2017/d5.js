const fs = require('fs');
const arr = fs.readFileSync('d5.txt', 'utf8').split('\n').map(Number);
let s = 0, i = 0;

// 1
while(i < arr.length){
	i += arr[i]++;
	s++;
}

// 2
while(i < arr.length){
	i += arr[i] >= 3 ? arr[i]-- : arr[i]++;
	s++;
}

console.log(s);