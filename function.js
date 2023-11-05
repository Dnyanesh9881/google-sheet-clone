let fx=document.getElementById("function");
fx.addEventListener("keypress", onClickEnter);
function onClickEnter(e){
    if(e.key==="Enter"){
        let str=fx.value;
      let ans=eval(str);
      activeElement.innerText=ans;
    
    }
 
}