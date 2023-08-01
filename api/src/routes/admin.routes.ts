import { Router } from "express"
import { registerUser } from "../services/crudAdmin/register"
import { loginUser } from "../services/crudAdmin/login"
import { getAllUsers } from "../services/crudAdmin/get"
import { upDateUser } from "../services/crudAdmin/put"
import "dotenv/config";

import passport from "passport"
import "../helper/auth"

import Jwt from "jsonwebtoken"
import { IGoogle } from "../interfaces/IGoogle"
import { IAdmin } from "../interfaces/IAdmin"

export const adminRoutes = Router()

// ─── Usuario ─────────────────────────────────────────────────────────────────

adminRoutes.post("/api/auth", registerUser)

adminRoutes.post("/api/login", loginUser)

adminRoutes.get("/api/all-users", getAllUsers)

adminRoutes.put("/api/update-user/:id", upDateUser)

// ─── Google ─────────────────────────────────────────────────────────────────

adminRoutes.get("/google",
  passport.authenticate(
    "google",
    {
      scope: ["email", "profile"]
    }))

adminRoutes.get("/auth/google/callback",
  passport.authenticate(
    "google",
    {
      session: false
    }),
  (req, res) => {
    const { URL_FRONT } = process.env

    const { id, googleId } = req.user as IAdmin & IGoogle
    console.log("ID-UUID:", id, "/ GOOGLE-ID:", googleId)
    Jwt.sign({ user: req.user }, "secretKey", { expiresIn: "5h" },
      (err: any, token: any) => {
        if (err) {
          return res.json({
            token: null,
          });
          return res.json({ error: err })
        }
        // res.cookie("tokenCookie", token, {
        //   httpOnly: true,
        //   sameSite: "none",
        //   path: "/login",
        //   domain: "http://127.0.0.1:5173",
        //   secure: false
        // })
        // return res.json({
        //   user: req.user,
        //   token,
        // });
        // res.setCookie("userCookie", req.user)
        // res.setHeader('Set-Cookie', `token=${token}`)
        // res.setHeader('Set-Cookie', `user=${req.user}`)
        // return res.redirect(`${URL_FRONT}/login?token=${token}&user=${req.user}`)
        return res.redirect(`${URL_FRONT}/admin/${id}?token=${token}&user=${req.user}`)

        // return res.redirect(`${URL_FRONT}/admin/${googleId}?token=${token}&user=${req.user}`)
      }
    );
  }
);
