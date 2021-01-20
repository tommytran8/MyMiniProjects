const display = document.getElementById("here");
const buttons1 = document.querySelectorAll(".buttons1 *");
const buttons2 = document.querySelectorAll(".buttons2 *");
const buttons3 = document.querySelectorAll(".buttons3 *");
var curnum = "";

buttons1.forEach(element => {
    element.addEventListener("click", ()=>{
        if ((display.innerHTML != "_" && display.innerHTML != "answer") && element.textContent != "." && element.textContent != "=" ){
            display.innerHTML = display.innerHTML + element.textContent;
            curnum = curnum + element.textContent;
        }
        else if (display.innerHTML == "_" && element.textContent != "." && element.textContent != "="){
            display.innerHTML = element.textContent;
            curnum = element.textContent;
        }
        else if (element.textContent == "." && !check() && (parseInt(curnum) == parseFloat(curnum))){
            display.innerHTML = display.innerHTML + element.textContent;
            curnum = curnum + element.textContent;
        }
        else if (display.innerHTML != "_" && !check() && element.textContent == "="){
            // var sum = 0;
            // var num1 = "0";
            // var operator = '';
            // var num2 = "0";
            // for (var i = 0; i < display.innerHTML.length; i ++){
            //     if (!check1(i) && operator == "")
            //         num1 = num1 + display.innerHTML[i];
            //     else if (check1(i) && operator == "")
            //         operator = display.innerHTML[i];
            //     else if (!check1(i) && operator != ""){
            //         num2 = num2 + display.innerHTML[i];
            //     }
            //     else{
            //         sum = compute(operator, num1, num2); 
            //         num1 = sum.toString();
            //         operator = display.innerHTML[i];
            //         num2 = "0";
            //     }
            // }
            // sum = compute(operator, num1, num2); 
            // display.innerHTML = sum.toString();
            display.innerHTML = eval(display.innerHTML).toString();
            curnum = display.innerHTML;
        }
        else
            display.innerHTML = display.innerHTML;
    });
});


buttons2.forEach(operator => {
    operator.addEventListener("click", ()=>{
        if (display.innerHTML == "_" || check())
            display.innerHTML = display.innerHTML;
        else{
            display.innerHTML = display.innerHTML + operator.textContent;
            curnum = "";
        }
        
    });
});

buttons3.forEach(clears => {
    clears.addEventListener("click", ()=>{
        if (clears.textContent == "AC"){
            display.innerHTML = "_";
        }
        else if (clears.textContent == "CE" && display.innerHTML.length != 1){
            display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length-1);
        }
        else {
            display.innerHTML = "_";
        }
    });
});
function check(){
    return display.innerHTML[display.innerHTML.length-1] == "+" 
    || display.innerHTML[display.innerHTML.length-1] == "-" 
    || display.innerHTML[display.innerHTML.length-1] == "/"
    || display.innerHTML[display.innerHTML.length-1] == "*"
    || display.innerHTML[display.innerHTML.length-1] == ".";
}
// function compute(op, x , y) {
//     if (op == '+'){return parseFloat(x) + parseFloat(y);}
//     else if (op == '-') {return parseFloat(x) - parseFloat(y);}
//     else if (op == '/') {return parseFloat(x) / parseFloat(y);}
//     else if (op == '*') {return parseFloat(x) * parseFloat(y);}
//     else{return parseFloat(x);}
// }
// function check1(i){
//     return display.innerHTML[i] == "+" 
//     || display.innerHTML[i] == "-" 
//     || display.innerHTML[i] == "/"
//     || display.innerHTML[i] == "*";
// }