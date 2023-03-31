const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("/public"));
app.get("/", function (req, res) {
  res.render("list.ejs");
});

app.listen(3000, () => {
  console.log("3000 running");
});

const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://seotkdeveloper:xorb0719@cluster0.kiwkgte.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

const dbName = "project3";
async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("post");
  console.log("이 영역에 코드 추가");
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

