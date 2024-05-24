const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const port = 3000;

app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");
app.use(express.static("public"));

app.get("/", (req, res) => res.redirect("/generator"));

app.get("/generator", (req, res) => res.render("index"));

app.listen(port, () => console.log("啟動伺服器: http://localhost:3000"));
