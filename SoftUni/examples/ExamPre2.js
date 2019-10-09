// JAVASCRIPT Exam preparation N2

// Exaple 1:
/*function solve(input) {
  let baklavaKgPrice = Number(input.shift());
  let muffinKgPrice = Number(input.shift());
  let shtolenKg = Number(input.shift());
  let bonboniKg = Number(input.shift());
  let biskvitiKg = Number(input.shift());

  let shtolenPrice = baklavaKgPrice * 1.6;
  let shotelSum = shtolenPrice * shtolenKg;
  let bonboniPrice = muffinKgPrice * 1.8;
  let bonboniSum = bonboniPrice * bonboniKg;
  let biskvitiPrice = biskvitiKg * 7.5;

  let sumOfAll = shotelSum + bonboniSum + biskvitiPrice;
  var endNumber = sumOfAll.toFixed(2);
  return endNumber;
}
solve([6.90, 4.20, 1.5, 2.5, 1]);
solve([5.55, 3.57, 4.3, 3.6, 7]);

*/
//Example 2:

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
