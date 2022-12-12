const KNOTS_COUNT = 2; // 10 for part 2
const knots = [...Array(KNOTS_COUNT)].map(x => ({ x: 0, y: 0 }));
const tailVisits = new Set(['0.0']);
const dirsMapping = {
  'R': { x: 1, y: 0 },
  'L': { x: -1, y: 0 },
  'U': { x: 0, y: 1 },
  'D': { x: 0, y: -1 }
};

const move = (what, { x, y }) => (what.x += x, what.y += y);

const getTailMoveDirection = (head, tail) => ({
  x: Math.abs(head.x - tail.x) === 2 ? (head.x - tail.x) / 2 :
    Math.abs(head.y - tail.y) === 2 ?
      (Math.abs(head.x - tail.x) === 1 ? head.x - tail.x : 0)
      : 0,
  y: Math.abs(head.y - tail.y) === 2 ? (head.y - tail.y) / 2 :
    Math.abs(head.x - tail.x) === 2 ?
      (Math.abs(head.y - tail.y) === 1 ? head.y - tail.y : 0)
      : 0
});

input.split('\n').map(l => l.split(' ')).forEach(([direction, count]) => {
  for (let i = 0; i < count; i++) {
    let head = knots[0];
    move(head, dirsMapping[direction]);
    knots.slice(1).forEach((tail) => {
      move(tail, getTailMoveDirection(head, tail));
      head = tail;
    });
    tailVisits.add(knots[KNOTS_COUNT - 1].y + '.' + knots[KNOTS_COUNT - 1].x);
  }
});

console.log(tailVisits.size);