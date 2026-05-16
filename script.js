const buttons = document.querySelectorAll(".link-btn");

buttons.forEach((button) => {

  button.addEventListener("click", () => {

    // hapus active dari semua tombol
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // tambahkan active ke tombol dipilih
    button.classList.add("active");

  });

});