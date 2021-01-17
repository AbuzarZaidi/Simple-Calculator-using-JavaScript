function calc()
{
    n1=Number(document.getElementById("num1").value);
    n2=Number(document.getElementById("num2").value);
    oper=document.getElementById("operator").value;
    if(oper==='+')
    {
        document.getElementById("result").value=n1+n2;
    }
     else if(oper==='-')
    {
        document.getElementById("result").value=n1-n2;
    }
    else if(oper==='*')
    {
        document.getElementById("result").value=n1*n2;
    }
    else if(oper==='/')
    {
        document.getElementById("result").value=n1/n2;
    }
}