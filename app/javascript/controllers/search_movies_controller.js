import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search-movies"
export default class extends Controller {
  static targets = ["form", "input", "list"]

  connect() {
    // console.log('form', this.formTarget)
    // console.log(this.inputTarget)
    // console.log(this.listTarget)
  }

  update() {
    // console.log(this.inputTarget.value)
    // http://localhost:3000/movies?query=batman
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`;
    fetch(url, { headers: { Accept: "text/plain" } })
      .then((response) => response.text())
      .then((data) => this.listTarget.outerHTML = data);
  }
}
