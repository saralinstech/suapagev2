import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function read(path) {
  return readFile(new URL(path, root), "utf8");
}

test("home page keeps the Suapage positioning and conversion path", async () => {
  const [page, offers, dialog] = await Promise.all([
    read("app/page.tsx"),
    read("app/offer-data.json"),
    read("app/quote-dialog.tsx"),
  ]);

  assert.match(page, /Seu próximo cliente/);
  assert.match(page, /Textos \+ design/);
  assert.match(page, /2 revisões/);
  assert.match(page, /30 dias de suporte/);
  assert.match(page, /Site \+ Bio/);
  assert.match(dialog, /5591991984474/);

  const offerData = JSON.parse(offers);
  assert.equal(offerData.service.price, 1800);
  assert.equal(offerData.product.price, 2200);
  assert.equal(offerData.institutional.price, 3500);
});

test("secondary routes and metadata are present", async () => {
  const [layout, bio, sitemap, robots] = await Promise.all([
    read("app/layout.tsx"),
    read("app/bio/page.tsx"),
    read("app/sitemap.ts"),
    read("app/robots.ts"),
  ]);

  assert.match(layout, /Suapage/);
  assert.match(layout, /pt-BR/);
  assert.match(bio, /Seu site e sua Bio/);
  assert.match(sitemap, /suapage-bio/);
  assert.match(robots, /sitemap/);
});
