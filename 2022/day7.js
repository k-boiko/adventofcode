let workingPath = [];

const getNode = (root, path) =>
  path.reduce(
    (node, folder) => node && folder in node ? node[folder] : null,
    root
  );

const tree = input.split('\n$ ').reduce((root, command) => {
  if (command.startsWith('ls')) {
    Object.assign(getNode(root, workingPath), command.split('\n').slice(1).reduce((content, file) => {
      const [fileInfo, fileName] = file.split(' ');

      return {
        ...content,
        [fileName]: fileInfo === 'dir' ? {} : fileInfo
      };
    }, {}));
  } else {
    if (command == 'cd ..') {
      workingPath.pop();
    } else {
      workingPath.push(command.match(/cd (.+)/)[1]);
    }
  }

  return root;
}, { '/': {} });


const folders = [];

const getFoldersSizes = (root) => {
  let sum = 0;
  Object.values(root).forEach(value => {
    if (typeof value === 'object') {
      const size = getFoldersSizes(value);
      folders.push(size);
      sum += size;
    } else {
      sum += +value;
    }
  });
  return sum;
};


const allSum = getFoldersSizes(tree);
// part 1
console.log(folders.filter((size) => size <= 100000).reduce((a, b) => a + b));
// part 2
console.log(Math.min(...folders.filter((size) => allSum - size < 40000000)));