// set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// simple function to open WA with form content
function openWhatsAppWithForm(){
  const name = encodeURIComponent(document.getElementById('cf-name').value.trim());
  const phone = document.getElementById('cf-phone').value.trim();
  const message = encodeURIComponent(document.getElementById('cf-message').value.trim());
  
  // GANTI NOMOR WA DI SINI (tanpa + atau 0 di depan, pakai kode negara 62)
  const waNumber = '6285693672730';
  
  if(name === '' || phone === '') {
      alert('Mohon isi nama dan nomor WhatsApp Anda.');
      return;
  }

  const text = `Halo Admin CetakPro, perkenalkan saya ${name}.%0A(No WA: ${phone})%0A%0ASaya ingin pesan/tanya:%0A${message}`;
  
  window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');
}

// Navbar background change on scroll (Glass effect enhancement)
window.addEventListener('scroll', function() {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    nav.classList.add('shadow-sm');
  } else {
    nav.classList.remove('shadow-sm');
  }
});