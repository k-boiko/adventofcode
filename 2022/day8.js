let map = input.split('\n').map(l => l.split('').map(Number));

const isVisible = (center, top, bottom, right, left) =>
  center > top || center > bottom || center > right || center > left;

const part1 = map.reduce((sum, row, i) =>
  sum + row.filter((col, j) => isVisible(
    col,
    Math.max(...map.slice(0, i).map(l => l[j]), -1),
    Math.max(...map.slice(i + 1).map(l => l[j]), -1),
    Math.max(...map[i].slice(0, j), -1),
    Math.max(...map[i].slice(j + 1), -1)
  )).length
  , 0);

const getViewDistance = (center, trees) =>
  trees.findIndex(tree => tree >= center) + 1 || trees.length;

const part2 = Math.max(...
  map.reduce((stats, row, i) =>
    [...stats,
    ...row.map((col, j) =>
      getViewDistance(col, map.slice(0, i).map(l => l[j]).reverse()) *
      getViewDistance(col, map.slice(i + 1).map(l => l[j])) *
      getViewDistance(col, map[i].slice(0, j).reverse()) *
      getViewDistance(col, map[i].slice(j + 1))
    )]
    , [])
);

console.log({ part1, part2 });