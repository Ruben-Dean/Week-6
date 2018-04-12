

var num = 5;
var txt = "Yo!";
var object = {
    name:"Ruben"
};

function square(number){
   // return number * number;
    var num1 = prompt("Please enter a number:", "Here...");
    return num1*num1;
}

function sum(number){
    var num1 = prompt("Enter the first number:");
    var num2 = prompt("Enter the first number:");
    var num3 = prompt("Enter the first number:");
    var output = Number(num1) + Number(num2) + Number(num3);
    return window.alert(output);
}

var Person = {
    name: "Bob",
    age: 30,
    occupation: "Builder"
};

Person.name = "John";

function Hi(){
    alert("Hello")
}

function ageinc(){
   if(Person.age == Person.age)
        Person.age ++;
        return window.alert(Person.age)
  //  var num = 1;
   // var ageout = Number(Person.age) + num;
   // return window.alert(ageout);
}

var Person2 = {
    name: "Ruben",
    age:25,
    occupation: "Tester"
}

function create(){
    Person2.name = document.getElementById("text1").value;
    Person2.age = document.getElementById("text2").value;
    Person2.occupation = document.getElementById("text3").value;
    return window.alert(Person2.name +" "+ Person2.age + " " + Person2.occupation)
}

function upper(){
    var str = "My name is ruben";
    window.alert(str);

    var ustr = str.toUpperCase();
    window.alert(ustr);
}

function conc(){
    var str ="Concat string with number ";
    window.alert(str);

    var concat = str.concat(100);
    window.alert(concat);
}


//Strings 3
    var Names = ['Matic','Pogba','Carrick'];
    document.getElementById("str3").innerHTML = Names;

function con1() {
    if (Person2.age >= 20 && Person2.age <= 40) {
        window.alert(true);
    }else {
        window.alert(false);
    }
}


function ite1(){
        for (i = 0;i <= 10; i++){
            console.log(i)
        }
}

function ite2() {
    for (i = 0; i <= 10; i++) {
        console.log(i);

        if(i%2) {
            console.log("nothing");
        }
    }
}


//window.alert();
//document.write();
//console.log();