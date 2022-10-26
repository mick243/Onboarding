// function problem3(number) {
  const readline = require("readline");
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });
  const game365 = (end) => {
      let clap = 0;
      const regex365 = /3|6|9/g;
      for (let i = 1; i <= end; i++) {
          if (regex365.test(i)) clap++;
      }
      return clap;
  };
  
  rl.on("line", function(stage) {
      console.log(game365(stage));
      rl.close();
  }).on("close", function() {
      process.exit();
  });
// }
// module.exports = problem3;
