
function onClickExport(){
  let fileData=JSON.stringify(state);
let file=new Blob([fileData],{type:"application/json"});
let url=URL.createObjectURL(file);
  let a=document.createElement("a");
  a.href=url;
  a.download="sheet.json"
  a.click();

}