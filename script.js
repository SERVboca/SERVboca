const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const termosLink = document.getElementById("termosLink");
const modal = document.getElementById("modal");
const fecharModal = document.getElementById("fecharModal");

// Toggle do menu
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Mostrar o modal
termosLink.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("hidden");
  menu.classList.add("hidden"); // fecha o menu
});

// Fechar o modal
fecharModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Clica fora do modal para fechar
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
