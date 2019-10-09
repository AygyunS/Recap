// function gcd_two_numbers(x, y) {
//     if ((typeof x !== 'number') || (typeof y !== 'number')) 
//       return false;
//     x = Math.abs(x);
//     y = Math.abs(y);
//     while(y) {
//       var t = y;
//       y = x % y;
//       x = t;
//     }
//     return x;
//   }
//   console.log(gcd_two_numbers(5, 15));
//   console.log(gcd_two_numbers(2154, 458));

  function sameNumber(num){
    if(typeof num !== 'number'){
        return false;
    }
    else{
    var output = [];
    output = [],
    sNumber = num.toString();
    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        output.push(+sNumber.charAt(i));
    }

    var same = true;
    for (var i = 0, sum = 0; i < output.length; sum += output[i++]){
        if (output[i] !== output[0]) {
            same = false;
        }
    }
    console.log(same + " " + sum);

            
    }
  }

