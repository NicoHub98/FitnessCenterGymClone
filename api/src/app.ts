import express, { Application, NextFunction, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import { router } from "./routes";
import passport from 'passport'
import session from 'express-session';


export const app: Application = express();
app.use(
  cors({
    credentials: true,
    origin: "*",
    methods: ["POST", "GET", "DELETE", "PUT"]
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use((_req: Request, res: Response, next: NextFunction) => {
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(passport.initialize())
app.use(session({
  secret: typeof process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized: false
}));

app.use(router);

