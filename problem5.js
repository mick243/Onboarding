 const readline = require("readline");
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    const problem6 = (money) => {
    const coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

    const change = [];
    for (let i = 0; money !== 0; i++) {

        const count = money / coins[i] >= 0 ? Math.floor(money/coins[i]) : 0 ;
        change[i] = {
             단위: coins[i],
             개수: count
        }
        money = count >= 0 ? money -= coins[i] * count : money;
      }
        return change;
    }
    rl.on("line", function(money) {
      if(money <=0 || 1000000 < money ){
          console.log("1이상 1,000,000이하의 자연수를 입력해주세요")
          rl.close();
      }
      console.log(problem6(money));
      rl.close();
      }).on("close", function() {
      process.exit();
      });
