document.addEventListener("click", function (event) {
  const row = event.target.closest("tr");
  focusOnRow(row);
});

function focusOnRow(row) {
  const isFocused = row.classList.value.includes("table__row_active");
  if (!isFocused) {
    document
      .querySelectorAll(".table__row")
      .forEach((row) => row.classList.remove("table__row_active"));
    row.classList.add("table__row_active");
  } else {
    row.classList.remove("table__row_active");
  }
}
