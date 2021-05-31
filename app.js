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

function calc (){
    var firstNum= +prompt("Enter first number");
    var operation = prompt("Enter Operator (+,-,*,/)");
    var secondNum= +prompt("Enter second number");
    var result;

        if(operation=== "+"){
        result=firstNum + secondNum;
        alert(result);
        }
    
        else{
        alert("invalid Action");
        }
}

calc()