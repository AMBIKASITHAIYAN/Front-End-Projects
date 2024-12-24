   var bmitext=document.getElementById("bmi")
   var desctext=document.getElementById("desc")
   var submit=document.getElementById("submit")
   var reset=document.getElementById("reset")
   submit.addEventListener("click",function(e){
    e.preventDefault()
    var weight=document.getElementById("weight").value
    var height=document.getElementById("height").value
    if(isNaN(weight)||isNaN(height)||weight<=0||height<=0)
   {
    alert("enter the values")
    return
   }
   var hm=height/100
   var bmi=weight/Math.pow(hm,2)
   bmitext.innerHTML=bmi.toFixed(2)
  
   var desc=inter(bmi)
   bmitext.className=desc
   desctext.className=desc

   desctext.innerHTML=`you are ${desc}`


   }

   

   )
   function inter(bmi){
   if(bmi<18.5){
    return "underweight"
   }
   if(bmi<25){
    return "normal"
   }
   if(bmi<30){
    return "overweight"
   }
  else{
    return "obsc"
  }
   }
   reset.addEventListener("click",function(){
    bmitext.textContent="0"
    desctext.textContent="N/A"
   })