let c=document.getElementById('item-1');
let perc=document.getElementById('item-2');
let bspace=document.getElementById('item-3');
let divide=document.getElementById('item-4');
let n7=document.getElementById('item-5');
let n8=document.getElementById('item-6');
let n9=document.getElementById('item-7');
let x=document.getElementById('item-8');
let n4=document.getElementById('item-9');
let n5=document.getElementById('item-10');
let n6=document.getElementById('item-11');
let minus=document.getElementById('item-12');
let n1=document.getElementById('item-13');
let n2=document.getElementById('item-14');
let n3=document.getElementById('item-15');
let plus=document.getElementById('item-16');
let n00=document.getElementById('item-17');
let n0=document.getElementById('item-18');
let dot=document.getElementById('item-19');
let equal=document.getElementById('item-20');

c.addEventListener("click",()=>{
    document.getElementsByClassName('upper')[0].innerHTML="";
    document.getElementsByClassName('text-box')[0].innerHTML="";
    document.getElementsByClassName('text-box')[0].innerHTML="";
})
perc.addEventListener("click",()=>{
    sep1();
    document.getElementsByClassName('text-box')[0].innerHTML+="%";
    check()
})
divide.addEventListener("click",()=>{
    sep1();
    document.getElementsByClassName('text-box')[0].innerHTML+="&divide";
    check()
})
n7.addEventListener("click",()=>{
    document.getElementsByClassName('text-box')[0].innerHTML+="7";
    check()
})
n8.addEventListener("click",()=>{
    document.getElementsByClassName('text-box')[0].innerHTML+="8";
    check()
})
n9.addEventListener("click",()=>{
    document.getElementsByClassName('text-box')[0].innerHTML+="9";
    check()
})
x.addEventListener("click",()=>{
    sep1();
    document.getElementsByClassName('text-box')[0].innerHTML+="x";
    check()
})
bspace.addEventListener("click",()=>{
    document.getElementsByClassName('text-box')[0].innerHTML=document.getElementsByClassName('text-box')[0].value.substring(0,document.getElementsByClassName('text-box')[0].value.length-1);
    check()
})
n4.addEventListener("click",()=>{
    document.getElementsByClassName('text-box')[0].innerHTML+="4";
    check()
})
n5.addEventListener("click",()=>{
    document.getElementsByClassName('text-box')[0].innerHTML+="5";
    check()
})
plus.addEventListener("click",()=>{
    sep1();
    document.getElementsByClassName('text-box')[0].innerHTML+="+";
    check()
})
n6.addEventListener("click",()=>{
    document.getElementsByClassName('text-box')[0].innerHTML+="6";
    check()
})
minus.addEventListener("click",()=>{
    sep1();
    document.getElementsByClassName('text-box')[0].innerHTML+="-";
    check()
})
n3.addEventListener("click",()=>{
    document.getElementsByClassName('text-box')[0].innerHTML+="3";
    check()
})
n2.addEventListener("click",()=>{
    document.getElementsByClassName('text-box')[0].innerHTML+="2";
    check()
})
n1.addEventListener("click",()=>{
    document.getElementsByClassName('text-box')[0].innerHTML+="1";
    check()
})
dot.addEventListener("click",()=>{
    document.getElementsByClassName('text-box')[0].innerHTML+=".";
    check()
})
n00.addEventListener("click",()=>{
    document.getElementsByClassName('text-box')[0].innerHTML+="00";
    check()
})
n0.addEventListener("click",()=>{
    document.getElementsByClassName('text-box')[0].innerHTML+="0";
    check()
})
equal.addEventListener("click",()=>{
    sep2();
    upper();
    write();
    console.log( document.getElementsByClassName('text-box')[0].innerHTML, num1,opr,num2)
})
let num1=0;
let num2=0;
let opr="";
function upper()
{
    document.getElementsByClassName('upper')[0].innerHTML=document.getElementsByClassName('text-box')[0].value;
    document.getElementsByClassName('text-box')[0].innerHTML="";
}
function sep1()
{
    num1=Number.parseFloat(document.getElementsByClassName('text-box')[0].innerHTML);
}
function sep2()
{
    let str=num1.toString();
    opr=document.getElementsByClassName('text-box')[0].innerHTML[str.length];
    num2=Number.parseFloat(document.getElementsByClassName('text-box')[0].innerHTML.substring(str.length+1,document.getElementsByClassName('text-box')[0].innerHTML.length));
}
function write()
{
    if (opr=="+")
    {
        document.getElementsByClassName('text-box')[0].innerHTML=num1+num2;
        check()
        num1=num1+num2
    }
    else if (opr=="-")
    {
        document.getElementsByClassName('text-box')[0].innerHTML=num1-num2;
        check()
        num1=num1-num2
    }
    else if (opr=="x")
    {
        document.getElementsByClassName('text-box')[0].innerHTML=num1*num2;
        check();
        num1=num1*num2
    }
    else if (opr=="÷")
    {
        document.getElementsByClassName('text-box')[0].innerHTML=(num1/num2);;
        check();
        num1=num1/num2
    }
    else if (opr=="%")
    {
        document.getElementsByClassName('text-box')[0].innerHTML=num1%num2;
        num1=num1%num2
        check();
    }
}
function check()
{
    if (document.getElementsByClassName('text-box')[0].innerHTML.length>=11)
    {
        document.getElementsByClassName('text-box')[0].style.fontSize="30px";
        document.getElementsByClassName('text-box')[0].style.paddingTop="45px";
    }
    if (document.getElementsByClassName('text-box')[0].innerHTML.length>=15)
    {
        document.getElementsByClassName('text-box')[0].style.fontSize="22px";
        document.getElementsByClassName('text-box')[0].style.paddingTop="50px";
        document.getElementsByClassName('upper')[0].style.fontSize="18px";
    }
    if (document.getElementsByClassName('text-box')[0].innerHTML.length<=11)
    {
        document.getElementsByClassName('text-box')[0].style.fontSize="40px";
        document.getElementsByClassName('text-box')[0].style.paddingTop="35px";
        document.getElementsByClassName('upper')[0].style.fontSize="20px";
    }
    if (document.getElementsByClassName('text-box')[0].innerHTML.length==0)
    {
        document.getElementsByClassName('upper')[0].innerHTML="";
    }
}
