import { createUrlShortHandler, deleteUrlShortHandler, getUrlShortnerHandler, updateUrlShortHandler } from "../controllers/urlController.js";

export default function urlRoutes(server) {
    server.post("/", createUrlShortHandler);
    server.get("/:id", getUrlShortnerHandler);
    server.delete("/:id", deleteUrlShortHandler);
    server.patch("/:id", updateUrlShortHandler);
}