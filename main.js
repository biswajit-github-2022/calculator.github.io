console.log("hi");
function calculate() {
    const f_num = parseInt(document.getElementById("fnum").value);
    const s_num = parseInt(document.getElementById("snum").value);
    const op = document.getElementById("op").value;
    let result;
    console.log(f_num);
    console.log(s_num);
    console.log(op);
    if(op=='+') result= f_num + s_num;
    if(op=='-') result= f_num - s_num;
    if(op=='*') result= f_num * s_num;
    if(op=='%') result= f_num % s_num;
    if(op=='^') result= f_num ** s_num;
    if(op=='/'){
        if(s_num==0) result= 'undefined' ;
        else result= f_num / s_num
    }
    console.log(result);
    document.getElementById("res").innerHTML=result;
}