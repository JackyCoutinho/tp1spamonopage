const express = require("express");
const path = require("path");
const request = require("request");
const fs = require("fs");
const { API_KEY } = require("./config.js");

const app = express();

const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + API_KEY;

request.get(
  {
    url: url,
    json: true,
    headers: { "User-Agent": "request" },
  },
  (err, res, data) => {
    if (err) {
      console.log("Error:", err);
    } else if (res.statusCode !== 200) {
      console.log("Status:", res.statusCode);
    } else {
      // data is successfully parsed as a JSON object:
      var newData = JSON.stringify(data.results);
      fs.writeFile(
        __dirname + "/frontend/static/js/views/movies.json",
        newData,
        (err) => {
          if (err) throw err;
          console.log("Success!");
        }
      );
    }
  }
);

app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(8081, () => console.log("server is running.."));
