const thumbnails = document.querySelectorAll('.thumbnail'); //semua elemen thubmnail

// ambil element modal dan vidio player
const modal = document.getElementById('video-modal');
const videoPlayer = document.getElementById('video-player');
const videoSource = document.getElementById('video-source');
const closeBtn = document.getElementById('close-video');

// jalankan fungsi

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
    const videoUrl = this.dataset.video;//akses data vidio dengan atribut data set
    videoSource.src = videoUrl; //set vidieo source
    videoPlayer.load();
    modal.style.display = 'flex'; //tampilan setelah running


    });

});
// Menutup modal ketika tombol close diklik
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';  // Sembunyikan modal
    videoPlayer.pause();           // Hentikan pemutaran video
    videoPlayer.currentTime = 0;   // Set video ke awal
});