import Express from "express";
import { resolve } from "node:path";

const app = Express();

app.get("/", async (req, res) => {
  const pocPath = resolve("./poc.html");

  res.sendFile(pocPath);
});

app.get("/sse", (req, res) => {
  const headers = {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Origin": "*",
  };

  res.writeHead(200, headers);

  setInterval(() => {
    res.write("data: ok\n\n");
  }, 1000);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
