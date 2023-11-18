import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import { engine } from "express-handlebars";
import morgan from "morgan";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { connect } from "./config/db/index.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
app.get("/", (req, res) => res.send("adad"));

// Routes init
// route(app);

// Connect to DB
connect();

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
