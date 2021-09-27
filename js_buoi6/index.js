function bai1() {
    var content = "";
    var n = 1;

    for (var k = 1; k <= 10; k++) {
        for (var i = 1; i <= 10; i++) {
            if (i === 10) {
                content += n + "";
            } else {
                content += n + "-";
            }
            n++
        }
        content += "<br>"

    }
    document.getElementById("bai1").innerHTML = content;


}

var numberList = [];
function addNumberbai2() {
    var txtNumber = document.getElementById("txtNumber").value;
    var convertNumber = txtNumber.split(",");
    for (var i = 0; i < convertNumber.length; i++) {
        numberList.push(+convertNumber[i])
    }
}

var prime = [];


function checkPrimeNumber(j) {
    var count = 0;
    for (var i = 1; i <= numberList[j]; i++) {
        if (numberList[j] % i === 0) {
            count++;
        }

    }
    if (count === 2) {
        prime.push(numberList[j]);
        return;
    }
}
function bai2() {
    for (var j = 0; j < numberList.length; j++) {
        checkPrimeNumber(j);

    }
    document.getElementById("bai2").innerHTML = "cac so nguyeen to la :" + prime
}

function bai3() {
    var n = document.getElementById("txtNumber3").value;
    var sum = 0;
    for (var i = 2; i <= n; i++) {
        sum += i;
    }
    sum = sum + (2 * n);
    document.getElementById("bai3").innerHTML = sum;
}
function bai4() {
    var n = document.getElementById("txtNumber4").value;
    var thing = [];
    for (var i = 1; i <= n; i++) {
        if (n % i === 0) {
            thing.push(i);
        }
    }
    document.getElementById("bai4").innerHTML = thing;
}
function bai5() {
    var n = document.getElementById("txtNumber5").value;
    var x = "";
    for (var i = n.length - 1; i >= 0; i--) {
        x += n[i];
    }
    document.getElementById("bai5").innerHTML = x;
}
function bai6() {
    var n = 1;
    tong = 0;
    do {
        tong += n;
        n++;
    } while (tong + n + 1 <= 100 - n);
    document.getElementById("bai6").innerHTML = n;
}
function bai7() {
    var n = document.getElementById("txtNumber7").value;
    var x = "";
    for (var i = 1; i <= 10; i++) {
        x += n + "X" + i + "=" + (n * i) + "<br>"
    }
    document.getElementById("bai7").innerHTML = x;
}
function bai81(){
    var bai = ["4K", "KH", "5C", "KA", "QH", "KD", "2H", "10S", "AS", "7H", "9K", "10D"];
    var a=[];
    var b=[];
    var c=[];
    var d=[];
    var x=0;
    for (var i=0;i<4;i++){
        
        a[i]=bai[x];
        b[i]=bai[x+1];
        c[i]=bai[x+2];
        d[i]=bai[x+3];
        x+=4;
    }
    var text="player 1:"+ a+"<br>"+"player 2:"+b+"<br>"+"player 3:"+ c+"<br>"+"player 4:"+ d+"<br>";
    document.getElementById("bai8").innerHTML = text;
  

}

function bai9(){
    var n = document.getElementById("txtNumber9N").value;
    var m = document.getElementById("txtNumber9M").value;
    var cho= n/2-m;
    var ga= m-cho;
    var text= "cho:"+cho+"<br>"+"ga:"+ga;
    document.getElementById("bai9").innerHTML = text;
}
function bai10(){
    var h=document.getElementById("txtNumber10H").value;
    var m=document.getElementById("txtNumber10M").value;
    
    angle = (30*h)-(6*m)+(m*0.5);
    if (angle>180){
        angle=angle-360;
        angle=angle*(-1);
    }
    document.getElementById("bai10").innerHTML = angle;
}