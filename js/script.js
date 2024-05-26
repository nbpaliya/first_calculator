let currentValue="";
document.querySelector("#display").value=currentValue;

function one(){
    document.getElementById("one");
    currentValue=currentValue + '1';
    document.querySelector("#display").value=currentValue;
}

function two(){
    document.getElementById("two");
    currentValue = currentValue + '2';
    document.querySelector("#display").value=currentValue;
}
function three(){
    document.getElementById("three");
    currentValue = currentValue + '3';
    document.querySelector('#display').value=currentValue;
}
function four(){
    document.getElementById("four");
    currentValue = currentValue + '4';
    document.querySelector("#display").value = currentValue
}
function five(){
    document.getElementById("five");
    currentValue += '5'; // add to asine add for the += add
    document.querySelector('#display').value=currentValue;

}
function six(){
    document.getElementById("six");
    currentValue = currentValue +'6';
    document.querySelector('#display').value = currentValue;
}
function seven(){
    document.getElementById("seven");
    currentValue = currentValue +'7';
    document.querySelector('#display').value= currentValue;

}
function eight(){
    document.getElementById("eight");
    currentValue = currentValue +'8';
    document.querySelector('#display').value = currentValue;
}
function nine(){
    document.getElementById("nine");
    currentValue = currentValue + '9';
    document.querySelector('#display').value =  currentValue;
}
function zero(){
    document.getElementById("zero");
    currentValue = currentValue +"0" ;
    document.querySelector('#display').value = currentValue;
}
function clear(){
    currentValue = "";
    document.querySelector('#display').value = currentValue;
}
document.getElementById("clear").addEventListener('click',clear)

function equal()
{
    document.getElementById("equal");
    currentValue = eval(currentValue);
    document.querySelector('#display').value = currentValue;
}

function plus(){
    document.getElementById("plus");
    currentValue = currentValue + "+";
    document.querySelector("#display").value = currentValue;

}

function minus(){
    document.getElementById("minus");
    currentValue = currentValue +"-";
    document.querySelector('#display').value = currentValue;
}

function multi(){
    document.getElementById("multi");
    currentValue = currentValue + "*";
    document.querySelector("#display").value = currentValue;
}

function divided(){
    document.getElementById("divided");
    currentValue = currentValue + "/";
    document.querySelector("#display").value = currentValue;
}

