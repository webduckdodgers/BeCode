const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 8080;
const charset = "utf-8";

http
  .createServer((req, res) => {
    fs.readFile("index.html", charset, (error, html) => {
      const queryName = url.parse(req.url, true).query.name;

      if (error) {
        res.writeHead(404);
        res.write("Document introuvable");
      } else {
        res.writeHead(200, { "content-type": "text/html;charset=" + charset });
        res.write(html.replace("/name/", queryName));
      }
      res.end();
    });
  })
  .listen(port, () => {
    console.log("Serveur en écoute...");
    console.log("Port : " + port);
  });
