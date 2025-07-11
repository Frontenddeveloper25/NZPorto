const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');
const darkTogle = document.getElementById ('darkTogle');
const body = document.body;


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

// Cek preferensi dari localStorage
if (localStorage.getItem("darkMode") === "true") {
  body.classList.add('dark');
  darkTogle.textContent = "O";
}

darkTogle.addEventListener('click', () => {
  body.classList.toggle('dark');

  // Ubah icon dan simpan preferensi
  if (body.classList.contains('dark')) {
    darkTogle.textContent = "O";
    localStorage.setItem("darkMode", "true");
  } else {
    darkTogle.textContent = "O";
    localStorage.setItem("darkMode", "false");
  }
});




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
  