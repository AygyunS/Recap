
const workers = {
  weight: 120,
  experience: 20,
  bloodAlcoholLevel: 200,
  handsShaking: true,
  printData : function() {
    if(this.handsShaking == true){
      this.bloodAlcoholLevel += 0.1 * this.weight * this.experience;
      this.handsShaking = false;
    }
    console.log(workers);
  }
}
//console.log(workers.printData());

let fatherCar = {
  brand: 'BMW',
  model: 'X5', color: 'blue',

  toString: function() {
     return `[brand: ${this.brand}, model: ${this.model},color: ${this.color}]`;
   }
};
console.log('' + fatherCar);

let myCar = Object.create(fatherCar);
myCar.model = 'M4';
myCar.color = 'red';
console.log('' + myCar);

myCar.model = "New M4";
console.log('' + fatherCar);
console.log('' + myCar);

/*
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
*/
