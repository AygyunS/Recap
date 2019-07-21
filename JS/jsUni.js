var arr = [1,2,3,4,5,6,7];

arr.last = function () {
	console.log(arr.reverse()[0]);
}
arr.push(1);
arr.last();
