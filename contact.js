AOS.init();

emailjs.init({
  publicKey: "S9MhysoxoKEpw_PZ6",
});

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById('submitBtn').textContent = "Enviando"
  document.getElementById('submitBtn').disabled = true
  emailjs.sendForm("service_sr0ng5u", "template_fxxco7k", this).then(() => {
    document.getElementById('myForm').reset()
    document.getElementById('submitBtn').textContent = "Enviar"
    document.getElementById('submitBtn').disabled = false

    Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        text: 'Nos pondremos en contacto contigo muy pronto.',
        confirmButtonColor: '#3aa7e0'
    })
  })
  .catch((error) => {
    document.getElementById('submitBtn').textContent = "Enviar"
    document.getElementById('submitBtn').disabled = false
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo enviar el mensaje, intenta de nuevo más tarde o contacta al administrador.'
    })
  })
});