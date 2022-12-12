
const operations = {
  '*': (x, y) => x * y,
  '+': (x, y) => x + y
};

const monkeysConfigs = input.split('\n\n').map((monkey, i) => {
  const [_, arg1, operation, arg2] = monkey.match(/Operation: new = (old|\d+) ([+*]) (old|\d+)/);
  const divider = +monkey.match(/Test: divisible by (\d+)/)[1];

  return {
    items: monkey.match(/Starting items: ((\d+,? ?)+)/)[1].split(', ').map(Number),
    itemsHistory: 0,
    divider,
    operation: (old) =>
      operations[operation](
        arg1 === 'old' ? old : +arg1,
        arg2 === 'old' ? old : +arg2
      ) % MAX_DIVIDER, // remove % for part 1
    test: (worryLevel) =>
      worryLevel % divider
        ? monkey.match(/If false: throw to monkey (\d)/)[1]
        : monkey.match(/If true: throw to monkey (\d)/)[1]
  };
});

const MAX_DIVIDER = monkeysConfigs.reduce((mul, m) => mul * m.divider, 1);

function play() {
  monkeysConfigs.forEach(monkey =>
    monkey.items
      .splice(0, monkey.items.length)
      .forEach((item) => {
        monkey.itemsHistory++;
        const worryLevel = monkey.operation(item); // Math.floor(monkey.operation(item) / 3) for part 1
        monkeysConfigs[monkey.test(worryLevel)].items.push(worryLevel);
      })
  );
}

for (let i = 0; i < 10000; i++) {
  play();
}

console.log(monkeysConfigs
  .map(m => m.itemsHistory)
  .sort((a, b) => a - b)
  .slice(-2)
  .reduce((a, b) => a * b));