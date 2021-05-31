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

var num=+prompt("Enter a number for factorial")
var res=1;
function fact(a) {
    for(var i=1;i<=num;i++){
        res=res*i
    }
    document.write(res)
    
}
fact(a);