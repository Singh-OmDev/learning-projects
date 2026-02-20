const express = require("express");
const path = require("path");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const URL = require("./models/url");
 const cookieParser = require ('cookie-parser');

const  staticRoute = require('./routes/staticRouter');
const userRoute = require ('./routes/user');
app.use (cookieParser);


const app = express();
const PORT = 3000;

// view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// middleware
app.use(express.json());


 app.use(express.urlencoded({extended:false}));


// database
connectToMongoDB("mongodb://localhost:27017/short-url")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// url routes
app.use("/url", urlRoute);
app.use("/", staticRoute);
 app.use ('/user', userRoute)


app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );

  if (!entry) {
    return res.status(404).send("URL not found");
  }

  res.redirect(entry.redirectURL);
});


// server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
