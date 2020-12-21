
// How to print it in HTML-------------------------------------------------

let a1 = 10;
let b1 = "abcdef";
let c1 = [1, 2, 3, 4, 5];
console.log(a1);
console.log(b1, typeof b1, b1.length);
console.log(c1);
console.log("hello World")






//Variables -----------------------------------------------------------------
l = 5; //global Variable
let m = 10; //Block Variable
var n = 100; //Function Scope

function fun() {
    a2 = 5;
    if (a2) {
        b2 = 10;
        console.log("Inside", b2);
    }
    console.log("Outside", b2);

}
fun()
console.log("Global", b2);


// function (finding Square Root)
function square_root(s) {
    console.log(Math.sqrt(s));
    return "This is the square root of ";
    // return "Math.sqrt(s)";
}

// arrays-----------------------------------------------------------------------

let a = ["apple", "Mango", "Pineapple", "Guava", "papaya", "kiwi"];
console.log(a);


for (let i = 0; i < 4; i++) {
    console.log(a[i]);

}

// a.push(" ");//Insert at back
// a.pop(" ");//Remove from Back
// a.shift(" ");//Remove from Front
// a.unshift(" ");//Insert at Front
// a.indexOf(" ");// finds you the Index 

if (a[5] == "apple") {
    console.log("apple");

}
else {
    console.log("No it is", a[5]);
}

//Object(with Example)---------------------------------------------------------------------------
var bird ={
    x :200,
    y :300,
    color: "red",
    eggs: ["one", "Two", "Three"],


    fly:function() {
        console.log("Bird is flying",this.x,this.y);
    }

};
for (i=0, i<bird.eggs.length;   i++;){
    console.log(bird.eggs[i]);
}

bird.eggs.forEach(function(val,Idx){
    console.log(Idx,val);
});


// For loop another example---------------------------------------------------------------------------
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

for (i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// Same EWxample  in string
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + " ";
 
}
console.log(text);



var movies=["a","b","c","d","e","f"];
for (i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}






