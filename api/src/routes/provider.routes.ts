import { Router } from "express"
import { authToken } from "../middlewares/authToken"
import { getProvider } from "../services/crudProvider/get"
import { postProvider } from "../services/crudProvider/post"
import { putProvider } from "../services/crudProvider/put"
import { deleteProvider } from "../services/crudProvider/delete"

export const providerRoutes = Router()

// ─── Proveedor ───────────────────────────────────────────────────────────────

providerRoutes.get("/api/providers", getProvider)

providerRoutes.post("/api/provider", authToken, postProvider)

providerRoutes.put("/api/provider/:id", authToken, putProvider)

providerRoutes.delete("/api/provider/:id", authToken, deleteProvider)


