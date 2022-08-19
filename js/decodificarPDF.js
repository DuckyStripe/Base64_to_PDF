const botton = document.querySelector(".Botton");
botton.addEventListener('click', (e) => {
    const cadena = document.querySelector(".cadena").value;
    function downloadPDF(cadena) {
        const linkSource = `data:application/pdf;base64,${cadena}`;
        const downloadLink = document.createElement("a");
        const fileName =`${uuid.v1()}.pdf` ;
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();}
        downloadPDF(cadena);
    //document.querySelector(".cadena").value="";
});