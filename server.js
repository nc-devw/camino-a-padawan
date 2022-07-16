const http = require("http");

const users = [
  {
    id: 1,
    fname: "Karn",
    lname: "Yong",
    username: "karn.yong@mecallapi.com",
    avatar: "https://www.mecallapi.com/users/1.png",
  },
  {
    id: 2,
    fname: "Ivy",
    lname: "Cal",
    username: "ivy.cal@mecallapi.com",
    avatar: "https://www.mecallapi.com/users/2.png",
  },
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  switch (req.url) {
    case "/api/users":
      res.statusCode = 200;
      res.end(JSON.stringify(users));
      break;

    default:
      res.statusCode = 404;
      res.end("Not found");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log(`Estoy escuchando en el puerto 3000`);
});
