let currentFilmIndex = 0;
const films = [
  {
    src: "img/turningred.jpeg",
    description:
      "Turning Red is a 2022 American computer-animated fantasy comedy film produced by Pixar Animation Studios and distributed by Walt Disney Studios Motion Pictures. It was directed by Domee Shi (in her feature directorial debut) and produced by Lindsey Collins, from a screenplay written by Shi and Julia Cho, and a story by Shi, Cho, and Sarah Streicher.",
  },
  { src: "img/life.png", description: "The Secret Life of Pets is a 2016 American animated comedy film produced by Illumination Entertainment and distributed by Universal Pictures. It was directed by Chris Renaud, co-directed by Yarrow Cheney, and produced by Chris Meledandri and Janet Healy, from a screenplay written by Brian Lynch and the writing team of Cinco Paul and Ken Daurio.[6][1] The film stars the voices of Louis C.K., Eric Stonestreet, Jenny Slate, Kevin Hart, Ellie Kemper, Lake Bell, Dana Carvey, Hannibal Buress, Bobby Moynihan, Steve Coogan, and Albert Brooks." },
  { src: "img/toystry.jpg", description: "Toy Story 4 is a 2019 American animated comedy-drama film produced by Pixar Animation Studios for Walt Disney Pictures. It is the fourth installment in Pixar's Toy Story series and the sequel to Toy Story 3 (2010)." },
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
  { src: "img/gf.jpeg", description: "Dipper and Mabel Pines are in for an unexpected adventure when they spend the summer with their great uncle in the mysterious town of Gravity Falls, Oregon." },
  { src: "img/ls.jpg", description: "Lilo & Stitch is a 2002 American animated science fiction comedy-drama film produced by Walt Disney Feature Animation and released by Walt Disney Pictures." },
  { src: "img/zpz.png", description: "Star vs. the Forces of Evil is an American animated magical girl television series created by Daron Nefcy and developed by Jordana Arkin and Dave Wasson, which aired on Disney Channel and Disney XD.[3] It is the first Disney XD series created by a woman, and the third overall for Disney Television Animation (following Pepper Ann from 1997 and Doc McStuffins from 2012)." },
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

let currentNewsIndex = 0;
const news = [
  { src: "img/lk.jpg", description: "Moana 2 is an upcoming American animated musical fantasy adventure film produced by Walt Disney Animation Studios and distributed by Walt Disney Pictures. The second installment in the Moana franchise and a sequel to Moana (2016), the film was written and directed by David G. Derrick Jr. (in his feature directorial debut) and produced by Osnat Shurer. Auli'i Cravalho and Dwayne Johnson will reprise their roles as Moana and Maui, respectively." },
  { src: "img/luka.jpg", description: "Luca is a 2021 American animated coming-of-age fantasy film produced by Walt Disney Pictures and Pixar Animation Studios and distributed by Walt Disney Studios Motion Pictures." },
  { src: "img/jv.jpg", description: "Inside Out 2 is an upcoming American animated coming-of-age film produced by Pixar Animation Studios for Walt Disney Pictures. The sequel to Inside Out (2015), it is being directed by Kelsey Mann (in his feature directorial debut), produced by Mark Nielsen, and written by Meg LeFauve." },
];
function displayNews(index) {
  const { src, description } = news[index];
  document.getElementById("newsImage").src = src;
  document.getElementById("newsDescription").textContent = description;
}
function changeNews(step) {
  currentNewsIndex += step;
  if (currentNewsIndex >= news.length) {
    currentNewsIndex = 0;
  } else if (currentFilmIndex < 0) {
    currentNewsIndex = news.length - 1;
  }
  displayNews(currentNewsIndex);
}
displayNews(currentNewsIndex);
