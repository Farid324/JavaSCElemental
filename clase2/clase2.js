//Funcion declarativa
function holamundo(lista1, lista2, lista3)
{
    console.log("Lista de compras: "+ lista1 + lista2 + lista3);
}
holamundo("Huevo", "Pan", "carne");



// let x = function(x, y)
// {
//     return x + y;
// }

// let x =  (x, y) => {return x + y;}

//Funcion expresiva
let x = function(x, y)
{
    return x + y;
}

const suma = function(valor)
{
    return valor + 2;
}
console.log(suma(5));

const suma1 = (valor1 =>{return valor1 + 2});

console.log(suma1(5));

//Global Scope

// var variableGlobal = "Esto es una variable";
function variable()
function imprimir()
{
    console.log(´${variableGlobal}+ llamada dentro de una function´);
}
imprimir();

//1 caso

function variables()
{
    variableGlobal = "Esto es un variable global";
}
variables();

console.log(variableGlobal);

//caso 2
var variableGlobal = "Esto es una variable";
function variable()
{
    var variablelocal = variableGlobal = "variable global";
}
variable();
console.log(variableGlobal);

//Local Scope

function local()
{
    var variableLocal = "Esto es una variable local";
    console.log(variableLocalScope);
}
local();
console.log(variableLocal);

//Funciones dentro de funciones
function a()
{
    var variable1 = "variable externa";
    return function(){
        var variable2 = "variable interna";
        console.log(variable1);
    };
}
a()();

//Block Scope

function block(){
    const contador = 5;

    for( let i = 0; i < contador; i++)
    {
        console.log(i);
    }
    // console.log(i); //ERROR
}

block();

//Condicionales

var x = 5;
if(x <= 2)
{
    console.log("Hola mundo");
}
else
{
    console.log("Hola Negativo");
}

if(1 == 1)
{
    console.log("son iguales");
}

//De lo contrario, si(else if)


//ejemplo

var color = "negro";

if(color === "rojo" || color === "negro")
{
    console.log("excelente eleccion");
}