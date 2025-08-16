import { createUrlShortner, getUrlFromShortner, deleteUrlFromShortner, updateUrlFromShortner } from "../controllers/urlController.js";

export default function urlRoutes(server) {
    server.post("/", createUrlShortner);
    server.get("/:id", getUrlFromShortner);
    server.delete("/:id", deleteUrlFromShortner);
    server.patch("/:id", updateUrlFromShortner);
}