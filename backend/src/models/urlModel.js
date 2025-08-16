import { gerarId } from "../utils/id.js";

export class UrlShortner {
  constructor(urlForShortner) {
    this.finalUrl = urlForShortner;
    this.id = gerarId();
  }
}