//conventional way

/*
function greet(name,year){
    return "happy new year" + year + "to"+name;
}
var msg=greet("Prabhat",2022);
console.log(msg);
*/

//method 2

/*
var greet=function(name,year){
    return "happy new year" + year + "to"+name;
}
console.log(typeof(greet));
console.log(greet);
var msg=greet("Prabhat",2022);
console.log(typeof(msg));
console.log(msg);
*/

//method 3

var greet=new Function("name","year","return 'happy new year' + year + 'to '+name");

console.log(typeof(greet));
console.log(greet);
var msg=greet("Prabhat",2022);

console.log(typeof(msg));
console.log(msg);