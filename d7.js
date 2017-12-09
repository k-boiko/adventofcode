const fs = require('fs');
const values = [], knownValues = [];
const f = (_, __, parent, ...others) => parent ? others.map(o=> o.indexOf(',') !== -1 ? o = o.slice(0, -1) : o) : []
const arr = fs.readFileSync('d7.txt', 'utf8').split('\r\n').map(l=> l.split(' ')).map(l => {
	values.push(l[0]);
	knownValues.push(...f(...l));
	return l;
});

const root = values.filter(v => knownValues.indexOf(v) === -1)[0]

// 1
console.log(root);

// 2
const tree = {}
const sumChild = (child) => Object.keys(child).reduce((acc, key) => acc + (child[key].v || 0), 0)

function fillTree(cr, parent){
	const value = ~~arr[values.indexOf(cr)][1].slice(0, -1).substr(1);
	if(!arr[values.indexOf(cr)][2])
		return {v: value};
	parent[cr] = {v: value} 
	let chV = value;
	f(...arr[values.indexOf(cr)]).forEach(child => {
		parent[cr][child] = fillTree(child, parent[cr]);
		parent[cr].v += parent[cr][child].v;
		if(chV !== parent[cr][child].v){
			if(chV !== value)
				throw chV - sumChild(parent[cr][child]);
			else
				chV = parent[cr][child].v;
		}
	})
	return parent[cr];
}
try{
	fillTree(root, tree);
} catch(res){
	console.log(res);
}


