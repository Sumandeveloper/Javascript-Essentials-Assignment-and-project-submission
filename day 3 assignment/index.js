function doSomething(){
    var input=document.getElementById("txt-in").value;
    console.log(input);
    document.getElementById("head").innerHTML="Hello"+" "+input;
}
var btn=document.getElementById("btn");
btn.addEventListener("click",doSomething);