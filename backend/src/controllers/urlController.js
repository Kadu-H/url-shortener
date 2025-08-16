import { UrlShortner } from "../models/urlModel.js";

var dbUrl = [];

const createUrlShortnerObject = (url, database) => {
    const urlShortObject = new UrlShortner(url);
    
    const urlShortObjectExist = database.find(item => item.id === urlShortObject.id);
    if (urlShortObjectExist) {
        return createUrlShortnerObject(url, database);
    }

    return urlShortObject;
}

export const createUrlShortner = (req, res) => {
    const urlForShortner = req.body.url;
    const urlShortObject = createUrlShortnerObject(urlForShortner, dbUrl);

    dbUrl.push(urlShortObject);

    res.send(urlShortObject);
}

export const getUrlFromShortner = (req, res) => {
    const id = req.params.id;

    const urlShortObject = dbUrl.find(item => item.id === id);
    if (!urlShortObject) {
        return res.status(404).send("Está URL ainda não foi encontrada!");
    }

    res.send(urlShortObject);
}

export const deleteUrlFromShortner = (req, res) => {
    const id = req.params.id;

    const index = dbUrl.findIndex(item => item.id === id);
    if (index === -1) {
        return res.status(404).send("Está URL ainda não foi encontrada!");
    }

    const [removedUrlShortner] = dbUrl.splice(index, 1);

    res.send(removedUrlShortner);
}

export const updateUrlFromShortner = (req, res) => {
    const id = req.params.id;
    const url = req.body.url;

    const index = dbUrl.findIndex(item => item.id === id);
    if (index === -1) {
        return res.status(404).send("Está URL ainda não foi encontrada!");
    }

    dbUrl[index].url = url;

    res.send(dbUrl[index]);
}