

const sendMail = () => {

  let name = document.getElementById("ten_kh").value;
  let email = document.getElementById("email_kh").value;
  let message = document.getElementById("noidung_kh").value;

  if (name === '' || email === '' || message === '') {
    alert('Vui lòng nhập đủ thông tin');
  }
  else {
    const formatEmail = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (!formatEmail) {
      alert('Email không đúng định dạng!');
    } else {

      const params = {
        ten: name,
        email: email,
        noidung: message
      }

      console.log(params);

      emailjs
        .send("service_tjqfgw5", "template_l4ibfwe", params)
        .then(alert("Gửi thông tin thành công!"));

      document.getElementById('ten_kh').value = '';
      document.getElementById('email_kh').value = '';
      document.getElementById('noidung_kh').value = '';
    };

  }
}




