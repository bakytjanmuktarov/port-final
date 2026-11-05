const themeBtn = document.querySelector('.theme-btn');
function setTheme(isDark) {
  if (isDark) {
    document.body.classList.add('dark');
    themeBtn.textContent = '☀️';
  } else {
    document.body.classList.remove('dark');
    themeBtn.textContent = '🌙';
  }
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
setTheme(localStorage.getItem('theme') === 'dark');
themeBtn.addEventListener('click', function () {
  const isDarkNow = document.body.classList.contains('dark');
  setTheme(!isDarkNow);
});


const modal = document.querySelector('#modal');
if (modal) {
  const modalImg = document.querySelector('#modal-img');
  const modalTitle = document.querySelector('#modal-title');
  const modalText = document.querySelector('#modal-text');
  const modalLink = document.querySelector('#modal-link');
  const closeBtn = document.querySelector('#modal-close');
  const card1 = document.querySelector('#card1');
  const card2 = document.querySelector('#card2');
  card1.addEventListener('click', function (event) {
    event.preventDefault(); 
    modalImg.src = 'img/Gemini_Generated_Image_gt53rlgt53rlgt53.png';
    modalImg.className = 'modal-img';
    modalTitle.textContent = 'This portfolio';
    modalText.textContent = 'My personal portfolio website. Made with HTML, CSS and JavaScript.';
    modalLink.style.display = 'none';
    modal.classList.add('open'); 
  });
  card2.addEventListener('click', function (event) {
    event.preventDefault();
    modalImg.src = 'img/image.png';
    modalImg.className = 'modal-img contain'; 
    modalTitle.textContent = 'Handtalk';
    modalText.textContent = 'HandTalk: translating sign into speech and text.';
    modalLink.href = 'https://drive.google.com/drive/folders/1xpKQ9mWrRmGW_sbAQ3_jnDmSbVok6qne';
    modalLink.style.display = 'inline-block';
    modal.classList.add('open');
  });
  closeBtn.addEventListener('click', function () {
    modal.classList.remove('open');
  });
}


const galleryImg = document.querySelector('#gallery-img');
if (galleryImg) {
  const galleryCount = document.querySelector('#gallery-count');
  const prevBtn = document.querySelector('#gallery-prev');
  const nextBtn = document.querySelector('#gallery-next');
  const photos = ['img/WhatsApp Image 2026-11-05 at 09.12.27.jpeg', 'img/seci.jpeg', 'img/WhatsApp Image 2026-11-05 at 09.12.28.jpeg'];
  let current = 0; 
  nextBtn.addEventListener('click', function () {
    current = current + 1;
    if (current === photos.length) {
      current = 0;
    }
    galleryImg.src = photos[current];
    galleryCount.textContent = (current + 1) + ' / ' + photos.length;
  });
  prevBtn.addEventListener('click', function () {
    current = current - 1;
    if (current < 0) {
      current = photos.length - 1;
    }
    galleryImg.src = photos[current];
    galleryCount.textContent = (current + 1) + ' / ' + photos.length;
  });
}