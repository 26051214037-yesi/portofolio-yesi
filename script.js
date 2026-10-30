
// Mengambil elemen tombol menu
const menuToggle = document.getElementById("menuToggle");

// Mengambil daftar navigasi
const navLinks = document.getElementById("navLinks");

// Membuka dan menutup menu navigasi
menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Menutup menu setelah salah satu link diklik
const navigationItems = navLinks.querySelectorAll("a");

navigationItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

// Menampilkan tahun secara otomatis
document.getElementById("currentYear").textContent =
    new Date().getFullYear();
