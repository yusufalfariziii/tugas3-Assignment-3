const toggleButton = document.getElementById("toggle-theme");

// Simpan preferensi pengguna di localStorage (supaya saat reload tetap)
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "☀️ Light Mode";
}

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");
    toggleButton.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";

    // Simpan preferensi
    localStorage.setItem("theme", isDark ? "dark" : "light");
});