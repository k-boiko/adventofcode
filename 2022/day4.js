// part 1
const includes = (from1, to1, from2, to2) => from1 <= from2 && to1 >= to2;

input.split('\n').reduce((sum, inp) => {
  const [_, e1from, e1to, e2from, e2to] = inp.match(/(\d+)-(\d+),(\d+)-(\d+)/).map(Number);
  return sum + +(includes(e1from, e1to, e2from, e2to) || includes(e2from, e2to, e1from, e1to));
}, 0);

// part 2
const overlap = (from1, to1, from2, to2) => to1 >= from2 && to2 >= from1;

input.split('\n').reduce((sum, inp) => {
  const [_, e1from, e1to, e2from, e2to] = inp.match(/(\d+)-(\d+),(\d+)-(\d+)/).map(Number);
  return sum + +(overlap(e1from, e1to, e2from, e2to));
}, 0);