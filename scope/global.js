// variables

var a; //declarando
var b = 'b'; //declaracion - asignacion
b = 'bb'; //reasignacion
var a = 'aa'; // redeclaracion

//global scope
var fruit = "apple"; //global

console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    var country = "Colombia";
    console.log(country);
}

console.log(country);