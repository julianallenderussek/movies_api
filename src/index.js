const express = require("express");
const morgan = require("morgan");

const app = express();

//settings
app.set("port", process.env.PORT || 8005);

//middlewares
app.use(morgan("dev"))
app.use(express.urlencoded({ extended:false } ));
app.use(express.json())

// ROUTES GO HERE
app.get("/test", (req, res) => {
    res.json({"title": "OUR SERVER WORKS"})
})

app.use(require("./routes/movies"))
app.use("/movies", require("./routes/movies"))

app.listen( app.get("port"), ()=> {
    console.log("Listening in port 8005")
});