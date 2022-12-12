// part 1
const combinations = {
  'A X': 3,
  'B Y': 3,
  'C Z': 3,
  'A Y': 6,
  'B Z': 6,
  'C X': 6
};
const scores = {
  'X': 1,
  'Y': 2,
  'Z': 3
};
input.split('\n').reduce((acc, round) => acc + (combinations[round] || 0) + scores[round[2]], 0);

// part 2
const combinations = {
  'A X': 3 + 0,
  'A Y': 1 + 3,
  'A Z': 2 + 6,
  'B X': 1 + 0,
  'B Y': 2 + 3,
  'B Z': 3 + 6,
  'C X': 2 + 0,
  'C Y': 3 + 3,
  'C Z': 1 + 6,
};

input.split('\n').reduce((acc, round) => acc + combinations[round], 0);