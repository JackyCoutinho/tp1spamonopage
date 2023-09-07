import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Movies");
  }

  async getHtml() {
    async function getData(url) {
      const response = await fetch(url);
      return response.json();
    }

    const data = await getData("/static/js/views/movies.json");

    let cardMovies = "<div class='row'>";
    for (let i in data) {
      cardMovies +=
        "<div class='col-sm-3 mb-4'>" +
        "<div class='card'>" +
        "<img src='https://image.tmdb.org/t/p/w500" +
        data[i]["backdrop_path"] +
        "' class='card-img-top' alt='...'>" +
        "<div class='card-body'>" +
        "<h5 class='card-title'>" +
        data[i]["original_title"] +
        "</h5>" +
        "<p class='card-text'>" +
        data[i]["release_date"] +
        "</p>" +
        "<a class='btn btn-primary' " +
        "href='/movie-view/" +
        data[i]["id"] +
        "'>View Details</a>" +
        "</div>" +
        "</div>" +
        "</div>";
    }
    cardMovies += "</div>";
    return (
      `
       <h1 class='text-center p-3'>List of Movies</h1>
       ` + cardMovies
    );
  }
}
