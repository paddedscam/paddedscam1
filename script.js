const searchInput = document.getElementById("searchInput");
const artistRows = document.querySelectorAll(".artist-row");

searchInput.addEventListener("keyup", function () {
  const value = searchInput.value.toLowerCase();

  artistRows.forEach((row) => {
    const artistName = row.dataset.name.toLowerCase();

    if (artistName.includes(value)) {
      row.style.display = "flex";
    } else {
      row.style.display = "none";
    }
  });
});