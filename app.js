// Chapter # 35 to 38

// Assignment # 1

// function date(){
//     var time = new Date();
//     document.write(time);
// }
// date();

// Assignment # 2

// function greeting(){
//     var firstName= prompt("Enter Your First Name");
//     var lastName= prompt("Enter your last Name");
//     alert("Hellow "+ firstName+" "+lastName+ " Welcome to our country");
// }
// greeting();

// Assignment # 3

// var firstNum= +prompt("Enter first number");
// var secondNum= +prompt("Enter second number");
// function calc (a,b){

//     var result=a+b;
//     document.write(result);
// }

// calc(firstNum,secondNum);

// Assignment # 4

// function calc (){

//     var firstNum= +prompt("Enter first number");
//     var oper = prompt("Enter operator (+,-,*,/");
//     var secondNum= +prompt("Enter second number");
//     var result;
//     if(oper=== "+"){
//         result=firstNum + secondNum;
//     }
//     else if(oper=== "-"){
//         result=firstNum - secondNum;
//     }
//     else if(oper=== "*"){
//         result=firstNum * secondNum;
//     }
//     else if(oper=== "/"){
//         result=firstNum / secondNum;
//     }
//     else{
//         alert("Invalid Input");
//     }
//         document.write(result);
// }

// calc();

// Assignment # 5

// var result;
// function squ(a) {
//     result=a*a;
//     document.write(result);
// }
// var num=+prompt("Enter Number to get squareroot");
// squ(num);

// Assignment # 6

// var num=+prompt("Enter a number for factorial")
// var res=1;
// function fact(a) {
//     for(var i=1;i<=num;i++){
//         res=res*i
//     }
//     document.write(res)
    
// }
// fact(a);

// Assignment # 7

// var first=+prompt("First number")

// var last=+prompt("Last number")
// function num(){
// if(first<last){
//     for(var i=first;i<=last;i++){
//         var res=i
//         document.write(i+" ")
//     }
// }
// else if(last<first){
//     for(var i=first;i>=last;i--){
//         var res=i
//         document.write(i+" ")
//     }
// }
// else{
//     alert("invalid input")
// }
// }
// num();

// Assignment # 8

// var base=+prompt("Enter Base")

// var perp=+prompt("Enter Perpendicular")
// var hypo;
// var res;
// function first(){

//     function inner(){
//         hypo=((base*base)+(perp*perp))
//     }
//     inner()
//      res = Math.sqrt(hypo);
//     document.write(res)
// }

// first()


// Assignment # 9

// var first=+prompt("Enter Length ")

// var second=+prompt("Enter Height ")
// var res;
// function area(a,b){
//     res=(a*b)
//     document.write("area or rectangle is : "+res)
// }
// area(first,second);

// Assignment # 10

// function check(){
//     var userInput=prompt("Enter Value");
//     var check=userInput.split("").reverse().join("");
//         if(userInput== check){
//              document.write("Its a Palindrome word");
//         }
//         else{
//             document.write("Its not a Palindrome word");
//         }
// }

// check();

// Assignment # 11

// function uppercase(str){
//   var first = str.split(' ');
//   var newarray = [];
    
//   for(var i = 0; i < first.length; i++){
//       newarray.push(first[i].charAt(0).toUpperCase()+first[i].slice(1));
//     }
//   return newarray.join(' ');
//     }
// document.write(uppercase("the quick brown fox"));