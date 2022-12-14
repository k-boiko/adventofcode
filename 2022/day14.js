const range = (count, start = 0) => [...Array(count).keys()].map(x => x + start);

let lastRow = Math.max(...[...input.matchAll(/,(\d+)? ?/gm)].map(([_, n]) => +n));

let cave = input
  .split('\n')
  .map(ln => ln.split(' -> ').map(el => el.split(',')))
  .reduce(
    (stones, path) => {
      path.forEach(([x, y], i, self) => {
        if (!i) {
          return stones[y][x] = '#';
        }

        const [prevX, prevY] = self[i - 1];

        if (prevX === x) {
          range(Math.max(y, prevY) - Math.min(y, prevY) + 1, Math.min(y, prevY)).forEach(row => stones[row][x] = '#');
        }

        if (prevY === y) {
          range(Math.max(x, prevX) - Math.min(x, prevX) + 1, Math.min(x, prevX)).forEach(col => stones[y][col] = '#');
        }
      });

      return stones;
    }
    , [...range(lastRow + 2).map(_ => range(700).fill('.')), range(700).fill('#')]
  );

let part1 = 0;
let part2 = 0;
let sandCount = 0;
let sandFindsRest = true;

function dropSand(x, y, depths = 0) {
  if (y === lastRow) {
    part1 = part1 || sandCount;
  }

  if (cave[y][x] !== '.') {
    return true;
  }

  let coords = [0, -1, 1].find(moveX => cave[y + 1][x + moveX] === '.');

  if (coords !== undefined) {
    return dropSand(x + coords, y + 1, depths + 1);
  }

  if (y === 0 && x === 500) {
    part2 = sandCount + 1;
    return false;
  }

  cave[y][x] = 'o';
  return true;
}

while (sandFindsRest) {
  sandFindsRest = dropSand(500, 0);
  sandCount++;
}

console.log({ part1, part2 });