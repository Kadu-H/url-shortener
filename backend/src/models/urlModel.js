import prisma from "../db/prisma.js";
import redis from "../redis/redis.js";
import { gerarId } from "../utils/id.js";

export async function getUrlById(id) {
  const urlCached = await redis.get(id);
  if (urlCached) {
    return { id, url: urlCached };
  }

  const urlShort = await prisma.urlShortner.findUnique({ where: { id } });
  if (urlShort) {
    await redis.set(id, urlShort.url, 'EX', 3600);
  }

  return urlShort;
}

export async function deleteUrlById(id) {
  return await prisma.urlShortner.delete({ where: { id } });
}

export async function createUrlShortner(url) {

  const id = await GenerateUniqueIdUrlShort();

  return prisma.urlShortner.create({
    data: {
      id: gerarId(),
      url,
    }
  });

  async function GenerateUniqueIdUrlShort() {
    const id = gerarId();
    const urlShort = await prisma.urlShortner.findUnique({ where: { id } });

    if (urlShort) {
      return GenerateUniqueIdUrlShort();
    }

    return id;
  }
}

export async function updateUrlShortnerById(id, url) {
  return await prisma.urlShortner.update({
    where: { id },
    data: {
      url,
    }
  });
}
