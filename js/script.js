const loginbtn=document.getElementById("login");
loginbtn.addEventListener("click", function(){
    const loginarea=document.getElementById("login-area");
    loginarea.style.display="none";
    const transitionarea=document.getElementById("transition");
    transitionarea.style.display="block";
})

const depositbtn=document.getElementById("adddeposit");
depositbtn.addEventListener("click", function(){
    const depositamount=document.getElementById("depositamount").value;
    const depositnumber =parseFloat(depositamount);
    const currentdeposit=document.getElementById("currentdeposit").innerText;
    const currentdepositnumber=parseFloat(currentdeposit);
    const totaldeposit=depositnumber+currentdepositnumber;
    document.getElementById("currentdeposit").innerText=totaldeposit;
    
    const currentbalance =document.getElementById("currentbalance").innerText;
    const currentbalancenumber=parseFloat(currentbalance);
    const totalbalance=depositnumber+currentbalancenumber;
    document.getElementById("currentbalance").innerText=totalbalance;
    document.getElementById("depositamount").value="";
})

const withdrawbtn=document.getElementById("addwithdraw");
withdrawbtn.addEventListener("click",function(){

    const withdrawamount=document.getElementById("withdrawamount").value;
    const withdrawnumber=parseFloat(withdrawamount);
    const currentwithdraw=document.getElementById("currentwithdraw").innerText;
    const currentwithdrawnumber=parseFloat(currentwithdraw);
    const totalwithdraw=withdrawnumber+currentwithdrawnumber;
    document.getElementById("currentwithdraw").innerText=totalwithdraw;

    const currentbalance =document.getElementById("currentbalance").innerText;
    const currentbalancenumber=parseFloat(currentbalance);
    const totalbalance=currentbalancenumber-withdrawnumber;
    document.getElementById("currentbalance").innerText=totalbalance;
    document.getElementById("withdrawamount").value="";
})
