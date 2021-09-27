function bai2(){
    var x=document.getElementById("tXTx").value;
    var n=document.getElementById("tXTn").value;
    tong=0;
    x= parseInt(x);
    n=parseInt(n);
    for (var i=1;i<n;i++){
        var bien=x;
        for (var g=1;g<i;g++){
            bien=bien*x;
            
        }
        tong=tong+bien;
        
        console.log(tong);
    }
    document.getElementById("bai2").innerHTML=tong;
}