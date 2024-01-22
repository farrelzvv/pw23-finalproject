const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

// button untuk regist 
toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

// Fungsi untuk menyimpan data pendaftaran ke localStorage
function registerUser() {
  var username = document.getElementById('reg-username').value;
  var password = document.getElementById('reg-password').value;
  var email = document.getElementById('reg-email').value;

  // Simpan data pendaftaran ke localStorage
  localStorage.setItem('registeredUsername', username);
  localStorage.setItem('registeredPassword', password);
  localStorage.setItem('registeredEmail', email);

  alert('Daftar Berhasil, Silahkan Login Menggunakan data yang sama');
  window.location.href = 'index.html';
  // Mungkin Anda ingin melakukan pengalihan halaman atau tindakan lain setelah pendaftaran berhasil.
}



// Fungsi untuk mengotentikasi pengguna pada saat login

function authenticate() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Ambil data pendaftaran dari localStorage
  var registeredUsername = localStorage.getItem('registeredUsername');
  var registeredPassword = localStorage.getItem('registeredPassword');

  if (username === registeredUsername && password === registeredPassword) {
    alert('Login successful');
    window.location.href = 'home.html';
  } else if (username === 'admin' && password === '12345') {
    alert('Login berhasil'); // Assuming 'Login berhasil' means 'Login successful' in Indonesian
    window.location.href = 'ds/pages/dashboard.html';
  } else {
    alert('Login Gagal, silahkan daftar terlebih dahulu atau cek kembali data anda');
  }
}


