var d = new Date();
var sec1=d.getSeconds();
var min1=d.getMinutes();
var hour1=d.getHours();
sec1=(sec1*6)-90;
min1=(min1*6)-90;
hour1=((hour1%12)*30+(min1/12))-90;

var x=document.getElementById("line-1");
var y=document.getElementById("line-2");
var z=document.getElementById("line-3");

x.style.transform="rotate("+sec1+"deg)";
x.style.transformOrigin="20%";
y.style.transform="rotate("+min1+"deg)";
y.style.transformOrigin="20%";
z.style.transform="rotate("+hour1+"deg)";
z.style.transformOrigin="20%";

var p=document.getElementById("line-1");
var o=document.getElementById("line-2");
var l=document.getElementById("line-3");
var id = setInterval(function (){
    //var p=document.getElementById("line-1");
    p.style.transform+="rotate(0.3deg)";
},50);
var id1= setInterval(function (){
    //var p=document.getElementById("line-1");
    o.style.transform+="rotate(6deg)";
},60000);

var id2 = setInterval(function (){
    //var p=document.getElementById("line-1");
    l.style.transform+="rotate(6deg)";
},720000);



