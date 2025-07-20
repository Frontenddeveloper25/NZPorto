const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');
const darkTogle = document.getElementById('darkTogle');
const body = document.body;
const navbar = document.querySelector('.navbar'); 
const myCanvas = document.getElementById('myCanvas');


myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

const c = myCanvas.getContext('2d');

c.fillStyle = 'blue';
c.strokeStyle = '#000';
c.lineWidth = 2;

c.rect(420, 400, 600, 200);
c.fill ();
c.stroke ();


c.fillStyle = 'red';
c.beginPath();
c.arc(730, 300, 120, 0, 2 * Math.PI);
c.fill ();
c.stroke();

c.fillStyle = 'black';
c.beginPath();
c.moveTo (600,50);
c.lineTo (700, 300);
c.lineTo (500, 300);
c.lineTo (600,50);
c.stroke ();


// test tag canvas


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



// fetch API

// fetch('https://jsonplaceholder.typicode.com/users?_limit=5') // ambil 5 data
//   .then(res => res.json())
//   .then(posts => {
  //     const container = document.getElementById('post-container');
  //     posts.forEach(post => {
    //       const card = document.createElement('div');
    //       card.className = 'post-card';
//       card.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
//       container.appendChild(card);
//     });
//   });

//   document.querySelector('.form-kontak').addEventListener('submit', function(e) {
//     e.preventDefault();
  
//     const nama = document.getElementById('nama').value;
//     const email = document.getElementById('Email').value;
//     const pesan = document.getElementById('pesan').value;

//     if (!nama || !email || !pesan) {
//       alert('Harap isi data');
//       return; // hentikan pengiriman
//     }
  
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         nama: nama,
//         email: email,
//         pesan: pesan
//       })
//     })
//     .then(res => res.json())
//     .then(data => {
//       console.log('Data terkirim ke JSONPlaceholder:', data);
//       alert('Pesan berhasil dikirim (dummy)!');
//     })
//     .catch(err => {
//       console.error('Gagal:', err);
//     });
//   });
  