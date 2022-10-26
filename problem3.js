function problem3(number) {
  const readline = require("readline");
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });
  const game365 = (end) => {
      let clap = 0;
      const regex365 = /3|6|9/;
      for (let i = 1; i <= end; i++) {
          if (regex365.test(i)) clap++;
      }
      return clap;
  };
module.exports = problem3;
