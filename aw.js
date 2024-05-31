function addition (p1, p2){
    return Number(p1) + Number(p2);

}

function addition1 () {
   
let num1= document.getElementById('add1').value;
let num2= document.getElementById('add2').value;
if(num1==false){
    alert ("Walang Laman!")
}
    else if (num2==false) {
    alert ("Walang Laman!")
    }
    else {
        let result= addition (num1, num2);
    document.getElementById('sum').value = result;
    }
}

