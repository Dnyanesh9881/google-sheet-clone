
function onClickExport(){
  let fileData=JSON.stringify(state);
let file=new Blob([fileData],{type:"application/json"});
let url=URL.createObjectURL(file);
  let a=document.createElement("a");
  a.href=url;
  a.download="sheet.json"
  a.click();

}

function onClickImport(){
  var fileInput = document.createElement('Input');
  fileInput.type="file"
  fileInput.click();

  fileInput.addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function() {
      var content = reader.result;
      google.script.run.processFile(content);
    }

    reader.readAsText(file);
  });
}

