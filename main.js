let text1 = document.querySelector('#name')
let text2 = document.querySelector('#email')

const sum = document.getElementById('sum');
sum.addEventListener('click', add);

const sub = document.getElementById('sub');
sub.addEventListener('click', subtraction);

const multiple = document.getElementById('multiple');
multiple.addEventListener('click', multiply);

const divide = document.getElementById('divide');
divide.addEventListener('click', divideBy);

const avg = document.getElementById('avg');
avg.addEventListener('click', age);

function add(){
       let num1 =parseInt(document.getElementById("name").value);
       let num2 =parseInt(document.getElementById("email").value);
        document.getElementById("result").innerHTML = num1 + num2;
}
function subtraction(){
        let num1 = document.getElementById("name").value;
        let num2 = document.getElementById("email").value;
        document.getElementById("result").innerHTML = num1 - num2;
}

function multiply(){
        let num1 = document.getElementById("name").value;
        let num2 = document.getElementById("email").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() { 
        let num1 = document.getElementById("name").value;
        let num2 = document.getElementById("email").value;
        document.getElementById("result").innerHTML = num1 / num2;
}
function age(){
        let num1 = document.getElementById("name").value;
        let num2 = document.getElementById("email").value;
        document.getElementById("result").innerHTML = num1 / num2;
}

text1.value = '';
text2.value = '';