import "bootstrap";

import "./filme-listagem.css";

function obterFilmesApi() {
  fetch("https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1", {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzUxOTIzODI0YzE5Y2NhYThmYjIwZGEwYTE2NjNiZSIsInN1YiI6IjY0Zjc3YjQ1ZjI5ZDY2MzU2NGViNGY2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.72i0KpayAWuRq0l5Dy8ArfvzfYhuk9umr8N3DNAYWSk",
    },
  })
    .then((res) => res.json())
    .then((obj) => console.log(obj));
}

obterFilmesApi();