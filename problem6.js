function problem6(money) {
  // const readline = require("readline");
  // const rl = readline.createInterface({
  //     input: process.stdin,
  //     output: process.stdout
  // });
  // if(rl > 1000000 || rl <= 0){
  //   console.log("1이상 100만 이하로 입력해주세요")
  //   return;
  // }
    const coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

    const change = [];
    for (let i = 0; money !== 0; i++) {

        const count = money / coins[i] >= 1 ? Math.floor(money/coins[i]) : 0 ;
        change[i] = {
            단위: coins[i],
            개수: count
        }

        money = count > 0 ? money -= coins[i] * count : money;
    }

    return change;
  }
  console.log(problem6(50247));
// module.exports = problem6;
