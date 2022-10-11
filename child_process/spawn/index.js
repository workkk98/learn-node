const { spawn } = require('child_process')

// 第一个argv[0]在这里就是node，但是在node child process中会被替换成真实的execPath
// const ls = spawn('node', ['./foo.js'])
// const ls = spawn('./bar', ['.foo.js'])
const ls = spawn('yarn', ['build'])


ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});