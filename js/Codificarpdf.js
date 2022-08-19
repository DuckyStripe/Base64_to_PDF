const BotonC= document.querySelector(".BotonC");
BotonC.addEventListener('click', (e) => {
    let selectedFile = document.querySelector(".File").files;
    let base64;
    if (selectedFile.length > 0) {
        let fileToLoad = selectedFile[0];
        let fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
           base64 = fileLoadedEvent.target.result;
           const salida=(base64.split(",")[1]);
           document.querySelector(".TextArea").value=salida;
           document.querySelector(".cadena").value=salida;
        };
        fileReader.readAsDataURL(fileToLoad);
    }
    document.querySelector(".File").value="";

});