const qrText = document.getElementById('qr_text');
const sizes = document.getElementById('sizes');
const generate = document.getElementById('generate');
const download = document.getElementById('download');
const qr_codeblock = document.querySelector('.body_qr');
let size = sizes.value;

generate.addEventListener('click', (e) => {
    e.preventDefault();
    if (qrText.value.length > 0) {
        generateQRcode();
    } else {
        alert("Vui lòng nhập text hoặc URL");
    }
});

sizes.addEventListener('change', (e) => {
    size = e.target.value;
    if (qrText.value.length > 0) {
        generateQRcode();
    }
});

download.addEventListener('click', (e) => {
    let img = qr_codeblock.querySelector('img');
    if (img) {
        let imgSrc = img.src;
        download.setAttribute("href", imgSrc);
    } else {
        e.preventDefault(); // Ngăn tải xuống nếu không có QR code
        alert("Không có mã QRcode để tải về. Vui lòng tạo mã QRcode trước.");
    }
});

function generateQRcode() {
    // Xóa nội dung cũ
    qr_codeblock.innerHTML = '';

    // Tạo QR code
    let qrcode = new QRCode(qr_codeblock, {
        text: qrText.value,
        width: size,
        height: size,
        colorDark: "#000000",
        colorLight: "#ffffff"
    });

    // Đợi một chút cho QR code được render trước khi lấy link tải
    setTimeout(() => {
        let img = qr_codeblock.querySelector('img');
        if (img) {
            let imgSrc = img.src;
            download.setAttribute("href", imgSrc);
        }
    }, 100); // Đợi 100ms để QR code được render
}
