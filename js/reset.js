const resetBtn = document.querySelector("#reset");

function getReset() {
  if (confirm("Delete all and Restart?")) {
    localStorage.clear();
    window.location.reload();
  } else {
    return;
  }
}

resetBtn.addEventListener("click", getReset);
