const fs = require('fs');
const arr = fs.readFileSync('d2.txt', 'utf8').split('\n').map(l=> l.split('\t').map(Number));

// 1
console.log(arr.reduce((acc, e) => acc+Math.max.apply(Math, e) - Math.min.apply(Math, e)));

// 2
console.log(arr.reduce((acc, e) => {
					for(let i = 0; i < e.length; i++)
						for(let j = 0; j < e.length; j++)
							if(e[i]%e[j] === 0 && e[i] !== e[j])
								return acc+(e[i]/e[j]);
				}, 0));