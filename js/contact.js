
// gui thong tin form vao email

function sendMail(){
    let params = {
        ten : document.getElementById("ten_kh").value,
        email : document.getElementById("email_kh").value,
        noidung : document.getElementById("noidung_kh").value,
    }

    emailjs.send("service_tjqfgw5","template_l4ibfwe",params).then(alert("send email"));
}