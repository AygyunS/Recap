function solve(input){
      let workingDays = Number(input.shift());
      let payForDay = Number(input.shift());
      let dollar = Number(input.shift());
      
      let oneMonthIncome = workingDays * payForDay;
      let oneYear = oneMonthIncome * 12 + oneMonthIncome * 2.5;
      let dds = oneYear * 0.25;
      let oneYearRealIcome = oneYear - dds;
      let avgIncomePerDay =  oneYearRealIcome / 365;

      let finalIncomeForOneDay = avgIncomePerDay*dollar;
      console.log(finalIncomeForOneDay.toFixed(2));
      
}
    solve([21,75.00,1.59]);
    solve([15,105,1.71]);
    solve([22,199.99,1.50]);


    
    
    
    
    
    
    