let stacks = `    [D]    
[N] [C]    
[Z] [M] [P]`;

let moves = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

let arrayStacks = stacks.split("\n").reduce((arr, line) => {
  const packsByStacks = line.match(/(.{3}) ?/g);

  packsByStacks.forEach((pack, i) => {
    if (!pack.startsWith("   "))
      arr[i].unshift(pack[1]); // 1 to get "P" from "[P]"
  });

  return arr;
}, Array.from([...Array(10)], _ => []));

moves.split("\n").forEach(action => {
  const [_, move, from, to] = action.match(/move (\d+) from (\d+) to (\d+)/);
  const crates = arrayStacks[from - 1].splice(-move, move); // .reverse(); // reversing was needed for part 1
  arrayStacks[to - 1].push(...crates);
});

const last = arr => arr[arr.length - 1];

console.log(arrayStacks.map(last).join(""));