function bai4(){
    var a = document.getElementsByTagName("div");
    console.log(a)
    for(var i=0;i<=9;i++){
        if ((i+1)%2==0){
            a[i].style.background = "red";
        } else{
            a[i].style.background = "blue";
        }
    }
}