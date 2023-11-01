let form=document.querySelector("#form");
let cellPosition=document.querySelector(".cell-position");
let state={};
let activeElement=null;


const defaultProperties={
  fontfamily:'sans',
  fontsize: 16,
  color: "#000000",
  textalignment:"left",
  bgcolor:"#ffffff",
  isBold:false,
  isItalic:false,
  isUnderlined:false,
  value:''
}

function aplyToActiveCell(changeState){
  
  activeElement.style.fontSize = `${changeState.fontsize}px`;
  activeElement.style.fontFamily = changeState.fontfamily;
  activeElement.style.color = changeState.color;
  activeElement.style.backgroundColor = changeState.bgcolor;
  activeElement.style.textAlign = changeState.textalignment;

  activeElement.style.fontWeight =changeState.isBold? "bold" : "normal"
  activeElement.style.fontStyle = changeState.isItalic? "italic" : "normal"
  activeElement.style.textDecoration = changeState.isUnderline? "underline" : "none"
  
}

function resetOptions(optionState){
   form.fontfamily.value=optionState.fontfamily;
   form.fontsize.value=optionState.fontsize;
   form.color.value=optionState.color;
   form.textalignment.value=optionState.textalignment;
   form.bold.checked=optionState.isBold;
   form.italic.checked=optionState.isItalic;
   form.underline.checked=optionState.isUnderlined;
   form.bgcolor.value=optionState.bgcolor;

}

 


    


