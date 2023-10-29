import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = 5500;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/more", (req: Request, res: Response) => {
  const sendHtml = `
    <li class="product-item">추가된 항목</li>
    `;

  res.send(sendHtml);
});

app.listen(port, () => {
  console.log(`localhost:${port} : Let's learn to htmx`);
});

interface ShopItemIF {
  thumbnail: string;
  title: string;
  description: string;
  price: number;
}
// Shop
class Item {
  thumbnail: string;
  title: string;
  description: string;
  price: number;

  constructor({ thumbnail, title, description, price }: ShopItemIF) {
    this.thumbnail = thumbnail;
    this.title = title;
    this.description = description;
    this.price = price;
  }
}

app.get("/item/list", (req: Request, res: Response) => {
  const item1 = new Item({
    thumbnail: "",
    title: "제목1",
    description: "설명1",
    price: 3.0,
  });
  const item2 = new Item({
    thumbnail: "",
    title: "제목2",
    description: "설명2",
    price: 6.0,
  });
  const item3 = new Item({
    thumbnail: "",
    title: "제목3",
    description: "설명3",
    price: 11.0,
  });
  const item4 = new Item({
    thumbnail: "",
    title: "제목4",
    description: "설명4",
    price: 2.0,
  });

  let renderHtml = "";
  const shopList = [item1, item2, item3, item4];

  shopList.forEach((item) => {
    renderHtml += `<div class="shop-item">
    <div class="shop-item-thumbnail"></div>
    <div class="shop-item-title-wrap">
      <h3 class="shop-item-title">${item.title}</h3>
    </div>
    <div class="shop-item-description-wrap">
      <span
        class="shop-item-description"
        title="${item.description}"
      >
        ${item.description}
      </span>
    </div>
    <div class="shop-item-price-wrap">
      <span class="shop-item-price">${item.price}$</span>
    </div>
  </div>`;
  });

  res.send(renderHtml);
});
