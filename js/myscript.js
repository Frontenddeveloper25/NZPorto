const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');
const darkTogle = document.getElementById('darkTogle');
const body = document.body;
const navbar = document.querySelector('.navbar'); 
const section = document.querySelectorAll('section'); //pelajari ya!!//
const navLight = document.querySelectorAll('.nav-item a'); //pelajari ya!!//

window.addEventListener('scroll', () => {
let current = "";

section.forEach(section => {
  
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  if (pageYOffset >= sectionTop - sectionHeight / 3 )
  {
    current = section.getAttribute('id');
  }
});

  navLight.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
    }

  });
});





// Gabungkan event listener scroll menjadi satu
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('blur'); // Tambahkan blur pada navbar saat scroll
    
    // Jangan menambahkan atau menghapus mode gelap di sini, biarkan tetap terpisah
  } else {
    navbar.classList.remove('blur'); // Hapus blur saat scroll kembali ke atas
  }
});


// Tampilkan sidebar dan overlay
hamburger.addEventListener('click', () => {
  navLinks.classList.add('active');
  overlay.classList.add('active');
});

// Sembunyikan sidebar dan overlay
closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('active');
  overlay.classList.remove('active');
});

// Klik di luar sidebar (overlay)
overlay.addEventListener('click', () => {
  navLinks.classList.remove('active');
  overlay.classList.remove('active');
});

// Cek preferensi dari localStorage untuk dark mode
if (localStorage.getItem("darkMode") === "true") {
  body.classList.add('dark');
  darkTogle.innerHTML = '<i data-feather="moon"></i>';
  feather.replace();
}

// Toggle dark mode saat darkTogle diklik
darkTogle.addEventListener('click', () => {
  body.classList.toggle('dark');
  
  if (body.classList.contains('dark')) {
    darkTogle.innerHTML = '<i data-feather="moon"></i>';
    localStorage.setItem("darkMode", "true");
  } else {
    darkTogle.innerHTML = '<i data-feather="sun"></i>';
    localStorage.setItem("darkMode", "false");
  }
  
  feather.replace(); // Panggil ulang setelah ubah icon
});


async function fetchImageFromCollection(collectionId) {
  
  const response = await fetch(`https://api.unsplash.com/collections/${collectionId}/photos?client_id=ByTJuriulj6bbszasVaBSfhF--CCmMETdVi-2fcPjHw`);
  const images = await response.json();

  console.log(images);

  
  // menambahkan gambar ke dalam carousel
  const carousel = document.querySelector('.hero-image-slide');
  carousel.innerHTML = '';

  images.forEach( image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.urls.regular;
    imgElement.alt = image.alt_description;
    imgElement.classList.add('hero-image');
    carousel.appendChild(imgElement);
  });
  }

// fungsi memanggil gambar
fetchImageFromCollection('WtAwB7aG-IM');

// integrasi fungsi manual carousel 

let index = 0 

function moveSlide(direction) {
  const slides = document.querySelectorAll('.hero-image-slide img');
  index = ( index + direction + slides.length) % slides.length;
  const newTransformValue = -index * 100;
  document.querySelector('.hero-image-slide').style.transform = `translateX(${newTransformValue}%)`;
  
}

setInterval(() => {
  fetchImageFromCollection('YWtAwB7aG-IM'); // Gantilah dengan ID koleksi Anda
}, 300000);  // Setiap 5 menit (300000 ms)
