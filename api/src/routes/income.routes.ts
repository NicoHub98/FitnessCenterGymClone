import { Router } from "express"
import { authToken } from "../middlewares/authToken"
import { deleteIncomeGym } from "../services/crudIncome/delete"
import { getIncomeGym } from "../services/crudIncome/get"
import { postIncomeGym } from "../services/crudIncome/post"
import { putIncomeGym } from "../services/crudIncome/put"

export const incomeRoutes = Router()

// ─── Ingresos Mensuales ───────────────────────────────────────────────────────────────

incomeRoutes.get("/api/income", getIncomeGym)

incomeRoutes.post("/api/income", authToken, postIncomeGym)

incomeRoutes.delete("/api/income/:id", authToken, deleteIncomeGym)

incomeRoutes.put("/api/income/:id", authToken, putIncomeGym)