const history = [];
let current = "";
let operators = [];
let terms = [];
let number;

function compose(n){
    if(number == undefined){
        number = n;
    }
    else{
        number = (number*10)+n;
    }
}

function one(){
    current += "1";
    compose(1);
}
function two(){
    current += "2";
    compose(2);
}
function three(){
    current += "3";
    compose(3);
}
function four(){
    current += "4";
    compose(4);
}
function five(){
    current += "5";
    compose(5);
}
function six(){
    current += "6";
    compose(6);
}
function seven(){
    current += "7";
    compose(7);
}
function eight(){
    current += "8";
    compose(8);
}
function nine(){
    current += "9";
    compose(9);
}
function zero(){
    current += "0";
    compose(0);
}

function calculate(){
    if(!current.length){
        return;
    }
    if(!operators.length){
        return;
    }
    terms.push(number);
    // TODO: use operator order
    let i;
    console.log(terms)
    while(terms.length>1){
        let o = operators.shift();
        let a = terms.shift();
        let b = terms.shift();
        console.log(`a:${a}, b:${b}`);
        if(o=="+"){
            number = a+b
            terms.unshift(number);
        }
        else if(o=="-"){
            number = a-b
            terms.unshift(number);
        }
        else if(o=="/"){
            number = a/b;
            terms.unshift(number);
        }
        else if(o=="*"){
            number = b*a;
            terms.unshift(number);
        }
        console.log(terms)
    }
    let result = terms.shift();
    console.log(result);
    current += " = "+result;
    console.log(current);
    history.push(current);
    current = "";
    number = undefined;
    updateHistory();
    updateDisplayWithValue(result);
}

function plus(){
    if(!current.length){
        console.log(current.lenght);
        return;
    }
    terms.push(number);
    operators.push('+');
    current+="+";
    number = undefined;
}

function minus(){
    if(!current.length){
        console.log(current.lenght);
        return;
    }
    terms.push(number);
    operators.push('-');
    current+="-";
    number = undefined;
}

function divide(){
    if(!current.length){
        console.log(current.lenght);
        return;
    }
    terms.push(number);
    operators.push('/');
    current+="/";
    number = undefined;
}

function multiply(){
    if(!current.length){
        console.log(current.lenght);
        return;
    }
    terms.push(number);
    operators.push('*');
    current+="*";
    number = undefined;
}


function updateDisplay(){
    $("#current").text(current);
}

function updateDisplayWithValue(x){
    $("#current").text(x);
}

function updateHistory(){
    let str = "";
    history.forEach(element => {
        str += element;
        str += "<br>"
    });
    $("#history").html(str);
}


$(".btn").click(function() {
      updateDisplay();
});
