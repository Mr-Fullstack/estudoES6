"use strict";

var titleSection = function titleSection(title, text) {
  return console.log(title, ':', text);
};

titleSection('operaçõs em arrays =>', 'utilizando função map()');
/*Função array.map() */

var arr = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
titleSection('', 'utilizando função map() em sua forma original');
console.log("array principal", arr);
var newArraWithMap = arr.map(function (item) {
  return item * item; // rodando map e multiplicando o valor dos items por ele mesmo
});
console.log("multiplicando o valor dos items por ele mesmo", newArraWithMap); // debugando o novo array mapeado

console.log("");
titleSection('', 'utilizando função map() para rodar outras funções');
console.log("");
console.log(calc(arr));
console.log("");
console.log(calc(arr, sub));
console.log("");
console.log(calc(arr, multi));
console.log("");
console.log(calc(arr, divi));

function calc(array) {
  var op = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : soma;
  console.log("array principal", arr);
  console.log("função que rodou no map", op);
  console.log("resultado:");
  return array.map(function (item) {
    return op(item);
  });
}

function soma(item) {
  return item + 2;
}

function multi(item) {
  return item * 2;
}

function divi(item) {
  return item / 2;
}

function sub(item) {
  return item - 2;
}

console.log("");
/*função  reducer */

console.log("");
titleSection('', 'utilizando função reducer() em sua forma original');
console.log("array principal", arr);
var newArraWithReduce = arr.reduce(function (accumulator, itemOfArray, indexOfArray, array) {
  return accumulator + itemOfArray; // rodando map e multiplicando o valor dos items por ele mesmo
});
console.log("");
titleSection('', 'utilizando função filter() em sua forma original');
console.log("array principal", arr);
var newArraWithFilter = arr.filter(function (item) {
  return item >= 10 && item <= 15;
});
var namePersons = ["Joana", 'Paulo', 'José', 'Ana', 'Aline', 'Marcos'];

function filterName(name) {
  return namePersons.filter(function (item) {
    return item === name;
  });
}

function findPerson(name) {
  var person = {
    name: "",
    notFound: ""
  };

  if (filterName(name).length > 0) {
    person.name = filterName(name)[0];
    person.notFound = false;
  } else {
    person.name = "nada encontrado";
    person.notFound = true;
  }

  return person;
}

var marcos = findPerson("Marddcos");

if (marcos.notFound) {
  console.log(marcos.notFound);
} else [console.log(marcos.name)];
