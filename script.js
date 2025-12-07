  // set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // simple function to open WA with form content
  function openWhatsAppWithForm(){
    const name = encodeURIComponent(document.getElementById('cf-name').value.trim());
    const phone = document.getElementById('cf-phone').value.trim();
    const message = encodeURIComponent(document.getElementById('cf-message').value.trim());
    // ganti nomor WA tujuan di bawah sesuai nomormu (format internasional tanpa tanda +)
    const waNumber = '6285693672730';
    const text = `Halo, saya ${name}%0ANo: ${phone}%0A%0A${message}`;
    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');
  }

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });