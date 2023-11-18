import express from "express";
import Hello from "./hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Courses/routes.js";
import ModuleRoutes from "./Modules/routes.js";
import "dotenv/config";

const app = express();
app.use(cors());
// app.use(
//   cors({
//     credentials: true,
//     origin: process.env.FRONTEND_URL,
//   })
// );

app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
Hello(app);
Lab5(app);
app.listen(process.env.PORT || 4000);
// app.listen(4000);
