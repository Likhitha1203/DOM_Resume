var num1
var num2
var output
var operator
var input = document.getElementById("input-display");
var res = document.getElementById("output-display");
const keys = document.getElementById("input-display");

keys.addEventListener('click', (e) => {
    const {target} = e;

    if(!target.matches('button')) {
        alert('Please Enter Valid Key')
    }
})

function digit(num) {
    input.value += num;
}

function clr() { 
    input.value = "" 
    res.value = "0"
}

function back()
{
    var exp = input.value;
    input.value=exp.substring(0,exp.length-1);
}

function Plus() {  
  
    operator = "+";  
    num1 = parseInt(input.value);  
    input.value = "";  
    res.value = num1 + operator;  
}

function Minus() {  
  
    operator = "-";  
    num1 = parseInt(input.value);  
    input.value = "";  
    res.value = num1 + operator;  
}

function Multiply() {  
  
    operator = "*";  
    num1 = parseInt(input.value);  
    input.value = "";  
    res.value = num1 + operator;  
}

function Division() {  
  
    operator = "/";  
    num1 = parseInt(input.value);  
    input.value = "";  
    res.value = num1 + operator;  
}

function Percentage() {  
  
    operator = "%";  
    num1 = parseInt(input.value);  
    input.value = "";  
    res.value = num1 + operator;  
}

function result() 
{
    // output=eval(input.value);
    //     if(output)
    //         {
    //             input.value=output;
    //         }  
    // num1 = parseInt(input.value)
    num2 = parseFloat(input.value)

    if(isNaN(num1) || isNaN(num2))
    {
        alert("Invalid Number")
    }

    else if(operator == "+")
    {
        output = num1 + num2;
    }

    else if(operator == "-")
    {
        output = num1 - num2;
    }

    else if (operator == "*")
    {
        output = num1 * num2;
    }

    else if (operator == "/")
    {
        output = num1 / num2;
    }

    else if (operator == "%")
    {
        if(res.value == "0")
        {
            output = (num1 / 100);
            res.value = num1 + operator + "100";
        }
        else if(res.value != "0")
        {
            output = (num1 /num2) * 100;
            res.value = num1 + operator + num2 + "*100 = " + output 
        }
    }

    input.value = "";
    input.value = output.toString();
    res.value = num1 + operator + num2 + " = " + output.toString();
    return;
}


