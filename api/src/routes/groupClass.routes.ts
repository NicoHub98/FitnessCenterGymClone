import { Router } from "express"
import { authToken } from "../middlewares/authToken"
import { deleteClassGroupGym } from "../services/crudClass/delete"
import { getClassGroupGym } from "../services/crudClass/get"
import { postClassGym } from "../services/crudClass/post"
import { putClassGroupGym } from "../services/crudClass/put"

export const groupClassRoutes = Router()

// ─── Clases Grupales ───────────────────────────────────────────────────────────────

groupClassRoutes.get("/api/class-group", getClassGroupGym)

groupClassRoutes.post("/api/class-group", authToken, postClassGym)

groupClassRoutes.delete("/api/class-group/:id", authToken, deleteClassGroupGym)

groupClassRoutes.put("/api/class-group/:id", authToken, putClassGroupGym)