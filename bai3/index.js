function bai3(){
var n=document.getElementById("tXTn").value;
var tich=1;
for (var i=1;i<=n;i++){
tich=tich*i;
}
document.getElementById("bai3").innerHTML=tich;
}