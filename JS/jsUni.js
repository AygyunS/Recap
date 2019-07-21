var arr = [1,2,3,4,5,6,7,8,9,10];

/*arr.getLastElement = function () {
	console.log(arr.reverse()[0]);
	arr.reverse();
}
arr.getLastElement();

function calcAggregates(arr) {
		console.log("Sum = " + arr.reduce((a,b) => a + b));
		console.log("Min = " + arr.reduce((a,b) => Math.min(a,b)));
		console.log("Max = " + arr.reduce((a,b) => Math.max(a,b)));
		console.log("Product = " + arr.reduce((a,b) => a * b));
		console.log("Join = " + arr.reduce((a,b) => '' + a + b));

}
calcAggregates(arr);
*/

function oddAndEven(arr){
	for (var i = 0; i < arr.length; i++) {
		if (i % 2=0) {
			arr[i]+=i;
		}else {
			arr[i]-=i;
		}
	}
}

oddAndEven(arr);
console.log(arr);

function isOdd(num) { return num % 2;}

function oddAndEven(arr){
    var arr1 = arr;
    for(var i = 0; i < arr.length; i++)
    {
        if(isOdd){

        }else{

        }
    }
}
