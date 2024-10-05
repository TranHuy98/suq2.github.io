

const sendMail = () => {

  let name = document.getElementById("ten_kh").value;
  let email = document.getElementById("email_kh").value;
  let message = document.getElementById("noidung_kh").value;

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all the required fields!');
  }
  else {
    const formatEmail = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (!formatEmail) {
      alert('The email is not in the correct format!');
    } else {

      const params = {
        ten: name,
        email: email,
        noidung: message
      }

      console.log(params);

      emailjs
        .send("service_xm8cv1k", "template_okfciq8", params)
        .then(alert("Information sent successfully!"));

      document.getElementById('ten_kh').value = '';
      document.getElementById('email_kh').value = '';
      document.getElementById('noidung_kh').value = '';
    };

  }
}




