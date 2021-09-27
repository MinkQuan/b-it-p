function bai1(){
    n=0;
    t=1;
    while (n+t<=1000){
        n+=t;
        t++;
        console.log(n);
    } 
    document.getElementById("bai1").innerHTML=t;
}