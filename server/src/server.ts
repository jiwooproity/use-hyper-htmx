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
