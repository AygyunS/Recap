function convertor(input) {
  let usd = Number(input.shift());
  let bgn = usd * 1.79549;
  console.log(bgn.toFixed(2));
}
convertor([10]);

function radiansToDegrees(input) {
  let radians = Number(input.shift());
  let degrees = radians * 180 / Math.PI;
  console.log(degrees.toFixed(0));
}
convertor([10]);
