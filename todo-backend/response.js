const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const users = [
  {
    userId: 100,
    name: "Ria",
  },
  {
    userId: 101,
    name: "Fily",
  },
];
app.get("/", (req, res) => {
  res.send("Hi this is the main route");
});

app.get("/users", (req, res) => {
    res.send("1");
  });

app.get("/users", (req, res) => {
  res.send("0");
});


/*
app.get("/users"),
  function (req, res) {
    console.log("hhhhh");
    // const reqUserId =req.params.userId;
    const reqUser = users.filter((item) => item.userId == 101);
    res.send("cccc");
  };
*/
app.post("/users", (req, res) => {
  users.push(req.body);
  res.send("test");
});

app.listen(8081, () => {
  console.log("App is runnning on port 8081");
});

// app.put('/userput', (req, res) => {
//     res.send("PUT request at /user")
//   })

// app.post('/users/:userId',(req, res) => {
//     console.log(req.params);

//   })

// const http=require("http")
// const requestListener= function (req,res){
//     res.writeHead(200);
//     res.end('Hello World')

// }
// const server=http.createServer(requestListener);
// server.listen(8080);
