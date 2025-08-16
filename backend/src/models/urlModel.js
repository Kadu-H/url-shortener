import { gerarId } from "../utils/id.js";

export class UrlShortner {
  constructor(urlForShortner) {
    this.url = urlForShortner;
    this.id = gerarId();
  }
}