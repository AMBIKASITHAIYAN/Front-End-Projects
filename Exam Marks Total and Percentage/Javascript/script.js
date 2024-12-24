 var total=document.getElementById("total")
    var per=document.getElementById("per")
    var comm=document.getElementById("comm")
    var button=document.getElementById("btn")
    button.addEventListener("click",function(){
        var tamil=parseInt(document.getElementById("tamil").value)
        var english=parseInt(document.getElementById("english").value)
        var maths=parseInt(document.getElementById("maths").value)
        var science=parseInt(document.getElementById("science").value)
        var socialscience=parseInt(document.getElementById("socialscience").value)
        if(isNaN(tamil)|isNaN(english)||isNaN(maths)||isNaN(science)||isNaN(socialscience)){
            alert("enter a valid number")
           d
    }
    else if(tamil=="" || english=="" || maths=="" || science=="" ||socialscience==""  ){
        alert("enter your marks")

    }
    else if(tamil<=0 ||tamil>100 ||english<=0 ||english>100 ||maths<=0 ||maths>100 ||science<=0||science>100|| socialscience<=0 ||socialscience>100  ){
        alert("enter valid marks")

    }
    var totalmarks=tamil+english+maths+science+socialscience
    total.innerHTML=totalmarks
    var percentage=totalmarks/5
    per.innerHTML=`${percentage}%`
    var comment=add(totalmarks)
    comm.className=comment
    comm.innerHTML=comment
    document.getElementById("tamil").value=""
    document.getElementById("english").value=""
    document.getElementById("maths").value=""
    document.getElementById("science").value=""
    document.getElementById("socialscience").value=""



    
    })
    function add(totalmarks){
       
        if(totalmarks>=35){
            return "Pass"
        }
        else{
            return "Fail"
        }
        
    }