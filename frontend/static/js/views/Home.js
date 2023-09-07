import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }

  async getHtml() {
    return `
            <h1>Bienvenu à MovieFlix</h1>
            <p>Retrouvez ici la liste des meilleurs films à l'affiche en salles et en savoir un peu plus sur eux..</p>
            <p>
                <a href="/movies" data-link>Voir les movies</a>
            </p>
        `;
  }
}
