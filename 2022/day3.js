const priorities = [...Array(26).keys()].reduce((acc, el) => ({
  ...acc,
  [String.fromCharCode(65 + el)]: 27 + el, // uppercase
  [String.fromCharCode(97 + el)]: 1 + el   // lowercase
}), {});

// part 1
input.split('\n').reduce((sum, rucksack) => {
  const pt1 = rucksack.slice(0, rucksack.length / 2);
  const pt2 = rucksack.slice(rucksack.length / 2);
  const sharedItem = pt1.split('').find(ch => pt2.includes(ch));
  return sum + priorities[sharedItem];
}, 0);

// part 2
input.split('\n').reduce((groups, rucksack, index) => {
  if (!(index % 3)) { groups.push([]); }
  groups[groups.length - 1].push(rucksack);
  return groups;
}, []).reduce((sum, [pt1, pt2, pt3]) => {
  const sharedItem = pt1.split('').find(ch => pt2.includes(ch) && pt3.includes(ch));
  return sum + priorities[sharedItem];
}, 0);