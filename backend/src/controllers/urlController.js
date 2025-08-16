import { UrlShortner } from "../models/urlModel.js";

var dbUrl = [];

export const createUrlShortner = (req, res) => {
    const urlForShortner = req.body.url;
    const urlShortObject = new UrlShortner(urlForShortner);

    dbUrl.push(urlShortObject);

    res.send(urlShortObject.id);
}

export const getUrlFromShortner = (req, res) => {
    const id = req.params.id;

    const urlShortObject = dbUrl.find(item => item.id === id);

    if (!urlShortObject) {
        return res.status(404).send("Está URL ainda não foi encontrada!");
    }

    res.send(urlShortObject.finalUrl);
}