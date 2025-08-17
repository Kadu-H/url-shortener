import { getUrlById, deleteUrlById, createUrlShortner, updateUrlShortnerById } from "../models/urlModel.js";

export const createUrlShortHandler = async (req, res) => {
    const urlShort = await createUrlShortner(req.body.url);
    if (!urlShort) {
        return res.status(500).send({ error: "Create error in url" })
    }
    res.status(201).send(urlShort);
}

export const getUrlShortnerHandler = async (req, res) => {
    const urlShort = await getUrlById(req.params.id);
    if (!urlShort) {
        return res.status(404).send({ error: "Not found" });
    }
    res.status(200).send(urlShort);
}

export const deleteUrlShortHandler = async (req, res) => {
    const urlShort = await deleteUrlById(req.params.id);
    if (!urlShort) {
        return res.status(404).send({ error: "Not found" });
    }
    res.status(200).send(urlShort);
}

export const updateUrlShortHandler = async (req, res) => {
    const urlShort = await updateUrlShortnerById(req.params.id, req.body.url);
    if (!urlShort) {
        return res.status(404).send({ error: "Not found" });
    }
    res.status(200).send(urlShort);
}