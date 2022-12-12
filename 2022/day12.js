let start = {};
let end = {};

const matrix = input.split('\n').map(
  (ln, row) => ln.split('').map(
    (ch, col) => ({
      x: col,
      y: row,
      val: ch === 'S' ? (start = { x: col, y: row }, 0)
        : ch === 'E' ? (end = { x: col, y: row }, 26)
          : ch.charCodeAt(0) - 97,
      ch
    })
  )
);

const copy = x => JSON.parse(JSON.stringify(x));

const bfs = (startX, startY, reverse) => {
  let m = copy(matrix);
  let searchPath = [m[startY][startX]];

  const maybeAddPoint = ({ x, y }, val = 0, path, point = (m[y] || [])[x] || {}) => (
    reverse
      ? point.val - val >= -1
      : point.val - val <= 1
  ) && (point.path = path) && searchPath.push(point);

  while (searchPath.length) {
    const { x, y, ch, val, path = 0 } = point = searchPath.shift();

    if (point.visited) {
      continue;
    } else {
      point.visited = true;
    }

    if (reverse ? ['a', 'S'].includes(ch) : ch === 'E') {
      return point.path;
    }

    maybeAddPoint({ x: x + 1, y }, val, path + 1);
    maybeAddPoint({ x: x - 1, y }, val, path + 1);
    maybeAddPoint({ x, y: y + 1 }, val, path + 1);
    maybeAddPoint({ x, y: y - 1 }, val, path + 1);
  }
};

console.log({
  part1: bfs(start.x, start.y),
  part2: bfs(end.x, end.y, true)
});