var str = "Hello";

var toLowerCase = function(str) {
    let arr = str.split('');
    let output = [];
    let temp;
      for(let i = 0; i < arr.length; i++) {
        if(arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90) {
          temp = String.fromCharCode((arr[i].charCodeAt(0) + 32))
          output.push(temp)
        } else {
          output.push(arr[i])
        }
      }
    return output.join('')
};

console.log(toLowerCase(str));
