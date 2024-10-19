import http from "http";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "products.json");
let products = [];

fs.readFile(filePath, "utf-8")
  .then((data) => {
    products = JSON.parse(data);
  })
  .catch((err) => {
    console.error("Error al leer el archivo:", err);
  });

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const path = parsedUrl.pathname;
  const method = req.method;

  if (method === "GET") {
    if (path === "/products") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(products));
    } else if (path.startsWith("/products/")) {
      const id = parseInt(path.split("/")[2]);
      const product = products.find((p) => p.id === id);

      if (product) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(product));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Product not found" }));
      }
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Route not found" }));
    }
  } else {
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Method not allowed" }));
  }
});

server.listen(3002, () => {
  console.log("Server is running on port 3002");
});
