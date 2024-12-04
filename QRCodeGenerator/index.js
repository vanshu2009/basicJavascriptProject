let imagebox = document.querySelector("#imgBox");
let qrImage = document.querySelector("#qrImg");
let qrText = document.querySelector("#qrText");
let button = document.querySelector("button");
button.addEventListener("click",generateQr);
function generateQr(){
    if(qrText.value.length>0){
    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
    }
    else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }
}