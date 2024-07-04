import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import sequelize from "./config/db.connection.js";
import userRoutes from "./routers/user.router.js"
import adminRoutes from "./routers/admin.router.js"
import giftRoutes from './routers/gift.router.js';
import carParkRoutes from './routers/carPark.router.js';

const app = express();
const PORT = process.env.PORT || 8088;
app.use(cors());
app.use(bodyParser.json());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type",
    "Content-Type: multipart/form-data"
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  // Pass to next layer of middleware
  next();
});

//connect database
sequelize
  .authenticate()
  .then(() => {
    console.log("connection has been established successfully");
  })
  .catch((error) => {
    console.error("unable connect to the database: ", error);
  });

//Table creation
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("tables created");
  })
  .catch((error) => {
    console.error("unable to create tables: ", error);
  });

//main routes
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use('/gift', giftRoutes);
app.use('/carPark', carParkRoutes);

//run server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});