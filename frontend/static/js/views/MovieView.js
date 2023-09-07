import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Viewing Movie");
  }

  async getHtml() {
    //console.log(this.params.id)
    const nu = Number(this.params.id);

    async function getData(url) {
      const response = await fetch(url);
      return response.json();
    }

    const data = await getData("/static/js/views/movies.json");

    const movie = data.find((item) => item.id === nu);

    return (
      "<div class='d-flex'>" +
      "<div class='p-3'>" +
      "<img src='https://image.tmdb.org/t/p/w400" +
      movie.poster_path +
      "'>" +
      "</div>" +
      "<div class='p-3'>" +
      "<h1>" +
      movie.original_title +
      "</h1>" +
      "<p><strong>Overview: </strong>" +
      movie.overview +
      "</p>" +
      "<p><strong>Popularity: </strong>" +
      movie.popularity +
      "</p>" +
      "<p><strong>Note: </strong>" +
      movie.vote_average +
      "</p>" +
      "<strong>Release date: </strong>" +
      movie.release_date +
      "</div>" +
      "</div>"
    );
  }
}
