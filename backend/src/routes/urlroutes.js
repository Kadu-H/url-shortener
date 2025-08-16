import { createUrlShortner, getUrlFromShortner } from "../controllers/urlController.js";

export default function urlRoutes(server) {
    server.post("/", createUrlShortner);
    server.get("/:id", getUrlFromShortner);
}