const input = 368078;
const mSize = Math.ceil(Math.sqrt(input));
const centrPos = ~~(mSize/2);
const sqr = x => x*x;


// 1
const bottomLine = sqr(mSize) - input < mSize;
const firstColumn = input - sqr(mSize-1) < mSize;

const linesToCenter = bottomLine ? centrPos : 
				firstColumn ? ~~((input - sqr(mSize-1))/2) : 0;
const cellsToCenter = bottomLine ? sqr(mSize) - input - centrPos : 
				firstColumn ? centrPos : 0;

console.log(linesToCenter + cellsToCenter);


// 2
// coming soon...