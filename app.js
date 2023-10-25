const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // URL을 기반으로 요청 경로를 추출
  const url = req.url;

  // '/' 경로로 들어온 요청을 index.html로 매핑
  if (url === "/") {
    const filePath = "./index.html";
    fs.readFile(filePath, (error, content) => {
      if (error) {
        res.writeHead(500);
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content, "utf-8");
      }
    });
  } else {
    // 다른 경로로 들어온 요청에 대한 처리를 추가 (서브페이지)
    // 예를 들어, '/subpage1'에 해당하는 서브페이지가 있다고 가정
    if (url === "/subpage1") {
      const filePath = "./subpages/subpage1.html";
      fs.access(filePath, fs.constants.F_OK, (err) => {
        if (!err) {
          fs.readFile(filePath, (error, content) => {
            if (error) {
              res.writeHead(500);
              res.end("Internal Server Error");
            } else {
              res.writeHead(200, { "Content-Type": "text/html" });
              res.end(content, "utf-8");
            }
          });
        } else {
          res.writeHead(404);
          res.end("Not Found");
        }
      });
    } else if (url === "/subpage2") {
      // '/subpage2'에 해당하는 서브페이지 처리 추가
    } else {
      // 다른 경로에 대한 처리를 추가할 수 있음
      res.writeHead(404);
      res.end("Not Found");
    }
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
