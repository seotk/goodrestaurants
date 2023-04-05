const express = require("express");
const app = express();

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));

const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://seotkdeveloper:xorb0719@cluster0.kiwkgte.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function main() {
  try {
    await client.connect();
    const postCollection = client.db("project3").collection("post");
    const counterCollection = client.db("project3").collection("counter");
    const categoryCollection = client.db("project3").collection("category");
    console.log("서버에 연결됬다");

    //GET
    app.get("/", async (req, res) => {
      // const query = {};
      const cursor = postCollection.find({});
      const result = (await cursor.toArray()).sort().reverse();
      res.render("list.ejs", { post: result });
    });

    app.get("/write", (req, res) => {
      res.render("write.ejs");
    });
    app.get("/acoords", (req, res) => {
      res.render("acoords.ejs");
    });

    app.get("/detail/:id", async function (req, res) {
      const result = await postCollection.findOne({
        _id: parseInt(req.params.id),
      });
      console.log(result);
      res.render("detail.ejs", { data: result });
    });

    app.get("/edit/:id", async function (req, res) {
      const result = await postCollection.findOne({
        _id: parseInt(req.params.id),
      });
      res.render("edit.ejs", { post: result });
    });

    //POST
    app.post("/add", async function (req, res) {
      const {
        food,
        good,
        name,
        time,
        adress,
        acoords,
        star,
        tel,
        img,
        detail,
        key1,
        key2,
        key3,
        key4,
      } = req.body;
      const { totalcounter } = await counterCollection.findOne({
        name: "number",
      });
      await postCollection.insertOne({
        _id: totalcounter + 1,
        postFood: food,
        postGood: good,
        postName: name,
        postTime: time,
        postAdress: adress,
        postAcoords: acoords,
        postStar: star,
        postTel: tel,
        postImg: img,
        postDetail: detail,
        postKey1: key1,
        postKey2: key2,
        postKey3: key3,
        postKey4: key4,
      });
      await counterCollection.updateOne(
        { name: "number" },
        { $inc: { totalcounter: 1 } }
      );
      res.redirect("/");
    });

    // app.post('/sendCoords', (req, res) => {
    //   // 클라이언트로부터 좌표 값이 전송된 경우
    //   if (req.body.coords) {
    //     // 받은 좌표 값을 출력합니다.
    //     console.log(`Coords received: ${req.body.coords}`);

    //     // coords 변수를 선언합니다.
    //     const coords = req.body.coords;

    //     // 클라이언트에게 JSON 형식으로 응답합니다.
    //     res.json({ message: 'Coords received' });

    //     // write.ejs 파일에 좌표 값을 전달합니다.
    //     res.render("write.ejs", { coords: coords });
    //   } else {
    //     res.status(400).json({ error: 'Invalid request' });
    //   }
    // });

    // DELETE
    app.delete("/delete", async function (req, res) {
      req.body._id = parseInt(req.body._id);
      await postCollection.deleteOne(req.body);
      res.status(200).send({ message: "성공" });
    });

    //PUT
    app.put("/edit", async (req, res) => {
      const {
        id,
        food,
        good,
        name,
        time,
        adress,
        acoords,
        star,
        tel,
        img,
        detail,
        key1,
        key2,
        key3,
        key4,
      } = req.body;
      await postCollection.updateOne(
        { _id: parseInt(id) },
        {
          $set: {
            postFood: food,
            postGood: good,
            postName: name,
            postTime: time,
            postAdress: adress,
            postAcoords: acoords,
            postStar: star,
            postTel: tel,
            postImg: img,
            postDetail: detail,
            postKey1: key1,
            postKey2: key2,
            postKey3: key3,
            postKey4: key4,
          },
        }
      );
      console.log("수정완료");
      // res.status(200).send({ message: "성공" });
      res.redirect("/");
    });

    app.put("/good", async (req, res) => {
      const { _id, postGood } = req.body;
      await postCollection.updateOne(
        { _id: parseInt(_id) },
        { $set: { postGood: postGood } }
      );
      console.log("좋아요");
      res.status(200).send();
    });
  } finally {
    console.log("마무리");
  }
}

main().catch(console.dir);

app.listen(8000, () => {
  console.log("8000 아주잘작동함");
});
