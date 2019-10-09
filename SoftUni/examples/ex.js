
function solve(input){
  let neededMoney = Number(input.shift());
  let fantasyCount = Number(input.shift());
  let horrorCount = Number(input.shift());
  let romanticCount = Number(input.shift());


  let totalSum = fantasyCount * 14.90 + horrorCount * 9.80 + romanticCount * 4.30;
  totalSum *= 0.8;

  if(totalSum > neededMoney){
    let profit = totalSum - neededMoney;
    let sellerMoney = Math.floor(profit * 0.10);
    let donatedMoney = neededMoney + profit - sellerMoney;


    console.log(donatedMoney.toFixed(2) + " leva donated." + '\n' +"Sellers will receive " + sellerMoney+" leva.");
  }
  else {
    neededMoney -= totalSum;
    console.log(neededMoney.toFixed(2) + " money needed.");
  }

}

solve([200,15,10,5]);
solve([168,5,3,8]);
