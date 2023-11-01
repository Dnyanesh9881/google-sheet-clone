columns=26;
let header=document.querySelector(".header");
let sno=document.querySelector(".serial-no");
let body=document.querySelector(".body");

let rows=100;

addHeaderColumns();
addSnoCells();
addBodyRows();




function addHeaderColumns(){
   let j=64;
    for(let i=0;i<=columns;i++){
        let headerCell=document.createElement("div");
        headerCell.className="header-cell cell";
        if(i!==0){
            headerCell.innerText=String.fromCharCode(j+i);
        }
        header.appendChild(headerCell);
    }
}
 function addSnoCells(){

    for(let i=1;i<=rows;i++){
        let row=document.createElement("div");
        row.innerText=i;
        row.className="sno-cell cell";
        sno.appendChild(row);
    }
 }
 
 function addBodyRows(){
     
    for(i=1;i<=rows;i++){
   addBodyRowCells(i);
    }
 }

 

function addBodyRowCells(rowNumber){
  let row=document.createElement("div");
  row.className="body-row";
  for(let i=1;i<=columns;i++){
   let cell=document.createElement("div");
  
   cell.className="body-cell cell";
   cell.contentEditable=true;
   row.appendChild(cell);



   cell.id=String.fromCharCode(64+i)+rowNumber;
   cell.addEventListener("focus", focusOnCell);
   cell.addEventListener("input", onFormChange);
  }
body.appendChild(row);
}

function focusOnCell(event){
  let elementId=event.target.id;
cellPosition.innerText=elementId;
activeElement=event.target;
if(state[elementId]){

 resetOptions(state[elementId]);
}
else{

resetOptions(defaultProperties);
}
}
function onFormChange(){
    if(!activeElement){
      alert("Please select a cell to make change")
      form.reset();
      return;
    }
    let currentState={
      color:form.color.value,
      bgcolor:form.bgcolor.value,
      fontfamily:form.fontfamily.value,
      fontsize:form.fontsize.value,
      isUnderline:form.underline.checked,
      isBold:form.bold.checked,
      isItalic:form.italic.checked,
      textalignment:form.textalignment.value
      }
     
      aplyToActiveCell(currentState);
      state[activeElement.id]={...currentState, value:activeElement.innerText};
  
  }

