const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url);

  // 확인할 파일 경로가 디렉토리인 경우 index.html을 사용
  if (fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === "ENOENT") {
        // 파일이 없을 때 404 응답
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("Not Found");
      } else {
        // 다른 오류에 대한 500 응답
        res.writeHead(500);
        res.end("Internal Server Error");
      }
    } else {
      const contentType = getContentType(filePath);
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

function getContentType(filePath) {
  const extname = path.extname(filePath);
  switch (extname) {
    case ".html":
      return "text/html";
    case ".css":
      return "text/css";
    case ".js":
      return "application/javascript";
    case ".jpg":
      return "image/jpg";
    default:
      return "text/plain";
  }
}

const port = 3000;
server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
