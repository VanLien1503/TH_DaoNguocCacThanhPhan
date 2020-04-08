let arr = [];
let count=0;
function check() {
    let input=parseInt(document.getElementById("number").value);
    for (let i=0;count<input;i++){
        let number=Math.floor(Math.random()* 100)+1;
        if(arr.indexOf(number) == -1){
            arr.push(number);
            count++;
        }
    }
    document.getElementById("result").innerHTML="Mảng arrayRandom: "+arr;
}

function reverse() {
    let first=0;
    let last=arr.length-1;
while (first<last){
    let b=arr[first];
    arr[first]=arr[last];
    arr[last]=b;
    first++;
    last--;
    }
    document.getElementById("result1").innerHTML="array SAU kHI ĐẢO NGƯỢC: "+arr;
    arr=[];
}