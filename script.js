const qrText  = document.getElementById('qr_text');
const sizes = document.getElementById('sizes');
const generate = document.getElementById('generate');
const download = document.getElementById('download');
const qr_codeblock = document.getElementById('body_qr');
let size = sizes.value;
generate.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
})
sizes.addEventListener('change',(e) => {
    size = e.target.value;
    isEmptyInput();
})

download.addEventListener('click',()=>{
    let img = document.querySelector('body_qr img')
    if(img != null){
        let imgAtrr = img.getAttribute('src');
        download.setAttribute('href',imgAtrr);
    }
    else{
        download.setAttribute('href',$(document.querySelector('canvas').toDataURL()))
    }
})

function isEmptyInput(){
    qrText.value.length>0?generateQRcode():alert("Vui long nhap text hoac URl")
}
function generateQRcode(){
    qr_codeblock.innerHTML='';
    new QRCode(qr_codeblock,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:'#FFF',
        colorDark:'#000',
    })
}