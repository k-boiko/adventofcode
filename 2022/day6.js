const MARKER_LENGTH = 14; // 4 for part 1

const marker = input.slice(0, MARKER_LENGTH).split('');

input
  .split('')
  .findIndex(el => {
    if (!marker.includes(el) && new Set(marker).size === MARKER_LENGTH) {
      return true;
    }
    marker.shift();
    marker.push(el);
  });