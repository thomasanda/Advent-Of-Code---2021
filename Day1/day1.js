const fs = require('fs');

//Part 1

fs.readFile('./inputDay1.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const numbers = data.split('\n').map(number => Number(number));
  let counter = 0;
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] < numbers[i + 1] ? counter += 1 : null;
  }
  console.log(counter);
})


// Part 2

fs.readFile('./inputDay1.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const numbers = data.split('\n').map(number => Number(number));
  let counter = 0;
  for (let i = 0; i < numbers.length; i++) {
    const first = numbers[i] + numbers[i + 1] + numbers[i + 2];
    const second = numbers[i + 1] + numbers[i + 2] + numbers[i + 3];
    first < second ? counter += 1 : null;
  }
  console.log(counter);
})


