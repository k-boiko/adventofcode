const fs = require('fs');
const arr = fs.readFileSync('d1.txt', 'utf8').split('').map(Number);

// 1
console.log(arr.reduce((acc, el, i, self) => acc + (el === self[(i+1) % self.length] ? el : 0), 0))

// 2
console.log(arr.reduce((acc, el, i, self) => acc + (el === self[(i+self.length/2) % self.length] ? el : 0), 0))
