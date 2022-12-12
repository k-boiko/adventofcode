// part 1
console.log(
  input.split('\n')
    .reduce(({ max, cur }, product) => ({
      cur: product ? cur + (+product) : 0,
      max: product ? max : Math.max(cur + (+product), max)
    })
      , { max: 0, cur: 0 }
    ).max
);

// part 2 
console.log(
  input.split('\n')
    .reduce(({ max, cur }, product) => ({
      cur: product ? cur + (+product) : 0,
      max: product ? max : [...max, cur + (+product)].sort((a, b) => a - b).slice(1)
    })
      , { max: [0, 0, 0], cur: 0 }
    ).max.reduce((p, c) => p + c)
);