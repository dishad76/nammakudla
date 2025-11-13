
let age=20;
if(age>=15){
    console.log("hello world");
}
else{
    console.log("hi world")
}

let value1=5
let value2="5"
console.log(value1+value2)
if(value1==value2){
    console.log(" they are equal");
}
let arr=[1,3,5]
let i;
for(i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
//create an array of  numbers and add all numbers in new variable and print new variable//
let numb=[1,2,3,4]
let sum=0;
for(i=0;i<numb.length;i++){
    sum=sum+numb[i];
}
console.log(sum);

function greet(){
    let name="disha"
    console.log('hello,${disha}')

}
greet()