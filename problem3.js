function problem3(number) {
  const readline = require("readline");
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });
  const game365 = (end) => {
      let clap = 0;
      const trap365 = /3|6|9/;
      for (let i = 1; i <= end; i++) {
          clap += (String(i).match(trap365) || []).length;
      }
      return clap;
  };
  rl.on("line", function(stage) {
    console.log(game365(stage));
    rl.close();
    }).on("close", function() {
    process.exit();
    });
  }
module.exports = problem3;
