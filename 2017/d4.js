const fs = require('fs');
const arr = fs.readFileSync('d4.txt', 'utf8').split('\r\n');

// 1
console.log(arr.map(l=> l.split(' '))
	.filter(el => el.length === el.filter((e, i, self) => self.indexOf(e) === i).length).length);
// 2
console.log(arr.map(l=> l.split(' ').map(e => e.split('').sort().join('')))
	.filter(el => el.length === el.filter((e, i, self) => self.indexOf(e) === i).length).length);