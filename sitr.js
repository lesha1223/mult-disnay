let currentFilmIndex = 0;
const films = [
  { src: "img/turningred.jpeg", description: "hgggh" },
  { src: "img/life.png", description: "hgigh" },
  { src: "img/toystry.jpg", description: "hfgh" },
];
function displayFilm(index) {
  const { src, description } = films[index];
  document.getElementById("filmImage").src = src;
  document.getElementById("filmDescription").textContent = description;
}
function changeFilm(step) {
  currentFilmIndex += step;
  if (currentFilmIndex >= films.length) {
    currentFilmIndex = 0;
  } else if (currentFilmIndex < 0) {
    currentFilmIndex = films.length - 1;
  }
  displayFilm(currentFilmIndex);
}
displayFilm(currentFilmIndex);


let currentSeriesIndex = 0;
const series = [
  { src: "img/gf.jpeg", description: "hggh" },
  { src: "img/ls.jpg", description: "hgih" },
  { src: "img/zpz.png", description: "hfh" },
];
function displaySeries(index) {
  const { src, description } = series[index];
  document.getElementById("seriesImage").src = src;
  document.getElementById("seriesDescription").textContent = description;
}
function changeSeries(step) {
  currentSeriesIndex += step;
  if (currentSeriesIndex >= series.length) {
    currentSeriesIndex = 0;
  } else if (currentFilmIndex < 0) {
    currentSeriesIndex = series.length - 1;
  }
  displaySeries(currentSeriesIndex);
}
displaySeries(currentSeriesIndex);
