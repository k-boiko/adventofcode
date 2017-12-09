const fs = require('fs');
const vars = {}, arr = fs.readFileSync('d8.txt', 'utf8').split('\n').map(e => e.split(' '))
let max = 0
const compare = function(a, s, b){
	return s === '==' ? vars[a] == b : 
		   s === '<=' ? vars[a] <= b :
		   s === '>=' ? vars[a] >= b :
		   s === '<' ? vars[a] < b :
		   s === '>' ? vars[a] > b :
		   s === '!=' ? vars[a] != b : 0
}
arr.forEach(l => vars[l[0]] = 0);

arr.forEach(l => {
	if(compare(l[4], l[5], l[6]))
		vars[l[0]] = l[1] === "inc" ? vars[l[0]] + ~~l[2] : vars[l[0]] - ~~l[2];
	if(vars[l[0]] > max)
		max = vars[l[0]]
});

// 1
console.log(vars);
// 2
console.log(max)


