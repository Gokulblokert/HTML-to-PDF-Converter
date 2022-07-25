
function createPDF() {
    var pdf = document.getElementById("content");
    var opt = {
        margin: 1,
        filename: 'html2pdf-converted.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf(pdf).set(opt).from().save();
}
