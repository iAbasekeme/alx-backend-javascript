/* eslint-disable jest/require-hook */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.on('end', () => {
  process.stdout.write('This important software is now closing');
});
