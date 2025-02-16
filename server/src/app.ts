import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRouter from "./routes/auth.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRouter);


export default app;
