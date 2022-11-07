var countDate = new Date("Nov 25, 2022 10:00:00").getTime();

var x = setInterval(function() {
var now=new Date().getTime();

var diff = countDate - now;

var days = Math.floor(diff/(1000*60*60*24));
var hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
var minutes = Math.floor((diff%(1000*60*60))/(1000*60));
var seconds = Math.floor((diff%(1000*60))/1000);

document.getElementById("countDown").innerHTML = days +" days, \n"+ hours +" hours, \n"+ minutes +" minutes, \n"
+ seconds +" seconds.";
}, 1000);