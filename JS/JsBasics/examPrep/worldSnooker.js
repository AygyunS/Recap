function solve(input){
    let stageFinal = input[0];
    let ticketType = input[1];
    let ticketCount = Number(input[2]);
    let picWithTroph = input[3];

    let photo = false;

    let finalPrice = 0;


    switch (stageFinal){
        case "Quarter final":
            if(ticketType==="Standard"){
                finalPrice = 55.50;
            }
            if(ticketType==="Premium"){
                finalPrice = 105.20;
            }
            if(ticketType==="VIP"){
                finalPrice = 118.90;
            }
        break;
        case "Semi final":
            if(ticketType==="Standard"){
                finalPrice = 75.88;
            }
            if(ticketType==="Premium"){
                finalPrice = 125.22;
            }
            if(ticketType==="VIP"){
                finalPrice = 300.40;
            }
        break;
        case "Final":
            if(ticketType==="Standard"){
                finalPrice = 110.10;
            }
            if(ticketType==="Premium"){
                finalPrice = 160.66;
            }
            if(ticketType==="VIP"){
                finalPrice = 400;
            }
        break;

    }

    finalPrice*=ticketCount;

    if(picWithTroph === 'Y'){
        photo=true;
    }
    if(finalPrice>4000){
        finalPrice*=0.75;
        photo = false;
    }
    else if(finalPrice>2500){
        finalPrice*=0.90;
    }
    if(photo === true){
        finalPrice+= ticketCount * 40;
    }
    
    
    console.log(finalPrice.toFixed(2));
    
}
  solve(['Final','Premium',25,'Y']);
  solve(['Semi final','VIP',9,'Y']);
  solve(['Quarter final','Standard',11,'N']);


