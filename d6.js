const fs = require('fs');
const arr = fs.readFileSync('d6.txt', 'utf8').split('\t').map(Number);

let snapshot = [JSON.stringify(arr)], s;

(f = () => {
	let max = Math.max.apply(Math, arr),
		ix =  arr.indexOf(max);
	arr[ix++] = 0;
	while(max){
		if(ix === arr.length) 
			ix = 0;
		arr[ix++]++;
		max--;
	}
	s = JSON.stringify(arr);
	if(snapshot.indexOf(s) === -1){
		snapshot.push(s);
		f();
	}
	else
		return;
})()

// 1
console.log(snapshot.length);
// 2
console.log(snapshot.length - snapshot.indexOf(s));

