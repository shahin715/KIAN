import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes";
import path from "path";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser());
app.use(
  "/uploads",
  express.static(
    path.join(
      process.cwd(),
      "uploads"
    )
  )
);
app.use("/api/v1", routes);

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "KIAN Ecommerce API Running",
  });
});

export default app;
