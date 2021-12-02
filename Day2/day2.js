const fs = require('fs');
// Part 1
fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let horizontal = 0;
  let depth = 0;
  const dirArray = data.split('\n');
  for (let i = 0; i < dirArray.length; i++) {
    switch (true) {
      case /forward/.test(dirArray[i]):
        horizontal += Number(dirArray[i].slice(-1));
        break;
      case /up/.test(dirArray[i]):
        depth -= Number(dirArray[i].slice(-1));
        break;
      case /down/.test(dirArray[i]):
        depth += Number(dirArray[i].slice(-1));
        break;
    }
  }
  console.log('Answer 1: ', horizontal * depth);
});

// Part 2

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let horizontal = 0;
  let aim = 0;
  let depth = 0;
  const dirArray = data.split('\n');
  for (let i = 0; i < dirArray.length; i++) {
    switch (true) {
      case /forward/.test(dirArray[i]):
        horizontal += Number(dirArray[i].slice(-1));
        depth += aim * Number(dirArray[i].slice(-1));
        break;
      case /up/.test(dirArray[i]):
        aim -= Number(dirArray[i].slice(-1));
        break;
      case /down/.test(dirArray[i]):
        aim += Number(dirArray[i].slice(-1));
        break;
    }
  }
  console.log('Answer 2: ', horizontal * depth);
});