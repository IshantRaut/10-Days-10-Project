//function paarmeters
function add(a,b,c){
    return a + b + c;
}

console.log(add(10,20));
console.log(add(10,20,30,40));

//Arguments .length
function printAll(){

    for(var i =0; i < arguments.length; ++i){
        console.log(arguments[i]);
    }
}
printAll('mango','apple');
printAll('fire','water','ice','gas');


//Default paramteres
function find(p, r =5, t =1){
    console.log("Intrest over", t, "years is:", (p * r *t) / 100);
    console.log("r:",r);
    console.log("t", t);
}

find(1000);
find(1000,7);
find(1000,8,2);


//Rest Parameter
//This is used to add atleastr three parameter
function MoreThanThree(a,b,c, ...numbers){
    var sum = a + b + c;
    for(var i =0;i< numbers.length;++i){
        sum += numbers[i];
    }
    return sum;
}
console.log(MoreThanThree('m','b','c','v','s','d','f','s','s','s','s','d','c'));

//For Loop
var arr=[10,20,30];
for(var i =0;i<arr.length;++i){
    console.log(arr[i] * 2);
}

//FOREACH method
items = [ 'apple','banana','orange'];
items.forEach(function(items){
    console.log(items);
})



//Objects And TIMING EVENTS

// Example of objects
var obj={
    key1:"value1",
    key2:12345,
    "key3": true,
    key4: function(){
        // Something here
    }
}
delete obj["key1"];
console.log(obj);


//For in LOOP example

for(key in obj){
    console.log(i, ":", obj[i]);
}

//FILTER
let arr1 = [1,3,2,5,7,6];
let ans = arr1.filter(isOdd);
console.log(ans);
function isOdd(x){
    return x % 2;
}



