
let main = process.argv;
let sum = 0 ;


result = (arr) => {
for( let i = 2; i < arr.length; i++){
sum += Number(arr[i])};
return sum}

console.log(result(main))