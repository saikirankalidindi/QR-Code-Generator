function generateQR() {
    var inputText = document.getElementById('inputText').value;
    if(inputText.trim() !== '') {
        var qrCode = new QRCode(document.getElementById('qrCode'), {
            text: inputText,
            width: 200,
            height: 200,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    } else {
        alert('Please enter a valid URL or text.');
    }
}
