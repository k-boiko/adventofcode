const part1 = input.split('\n')
  .reduce((cycles, command) =>
    [...cycles, ...(command.startsWith('addx') ? ['addx 0', command] : [command])]
    , ['noop']) // start with 'noop' to align array indexes (0 as 1st)
  .reduce((strengths, command, cycle) => {
    if (cycle && !((cycle + 20) % 40)) {
      strengths.unshift(strengths[0]);
      strengths[1] *= cycle;
    }

    if (command.startsWith('addx')) {
      strengths[0] += +command.split(' ')[1];
    }

    return strengths;
  }, [1])
  .slice(-6)
  .reduce((a, b) => a + b);

console.log(part1);

// =========================================
const part2 = input.split('\n')
  .reduce((cycles, command) =>
    [...cycles, ...(command.startsWith('addx') ? ['addx 0', command] : [command])]
    , [])
  .reduce(({ x, crt }, command, cycle) => {
    let spritePos = [x - 1, x, x + 1];
    let row = ~~(cycle / 40);
    crt[row] += spritePos.includes(crt[row].length) ? '#' : ' ';

    if (command.startsWith('addx')) {
      x += +command.split(' ')[1];
    }

    return { x, crt };
  }, { x: 1, crt: Array(7).fill('') })
  .crt
  .join('\n');

console.log(part2);