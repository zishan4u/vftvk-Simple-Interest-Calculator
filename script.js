function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var dur = document.getElementById("years").value;
    var interest = (principal * dur * rate) /100;
    var amount = parseInt(principal)+parseInt(interest);
    var year = new Date().getFullYear()+parseInt(dur);
    if (principal <= 0)
    {
        alert("Enter a positive number");
    }
    else
    {
    document.getElementById("pri_val").innerHTML=principal;
    document.getElementById("r_val").innerHTML=rate;
    document.getElementById("d_val").innerHTML=dur;
    document.getElementById("int_val").innerHTML=interest;
    document.getElementById("y_val").innerHTML=year;

    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
    }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}        