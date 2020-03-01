const titleSection = (title,text) => console.log(title,':',text);

titleSection('operaçõs em arrays =>','utilizando função map()');

/*Função array.map() */

const arr = [1,2,3,4,5];

titleSection('','utilizando função map() em sua forma original');
console.log("array principal",arr);
const newArraWithMap = arr.map((item)=>{
    return item*item;// rodando map e multiplicando o valor dos items por ele mesmo
}); 
console.log("multiplicando o valor dos items por ele mesmo",newArraWithMap)// debugando o novo array mapeado
console.log("");
titleSection('','utilizando função map() para rodar outras funções');
console.log("");
console.log(calc(arr));
console.log("");
console.log(calc(arr,sub));
console.log("");
console.log(calc(arr,multi));
console.log("");
console.log(calc(arr,divi));

function calc(array,op = soma){
    console.log("array principal",arr);
    console.log("função que rodou no map",op);
    console.log("resultado:");
    return array.map( item => op(item) );
}

function soma(item){
    return item+2;
}

function multi(item){
     return item*2;
}

function divi(item){
    return item/2;
}

function sub(item){
    return item-2;
}

/*função  reducer */

