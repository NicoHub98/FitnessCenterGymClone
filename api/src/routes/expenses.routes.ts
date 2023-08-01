import { Router } from "express"
import { authToken } from "../middlewares/authToken"
import { deleteExpensesGym } from "../services/crudExpense/delete"
import { getExpensesGym } from "../services/crudExpense/get"
import { postExpenseGym } from "../services/crudExpense/post"
import { putExpensesGym } from "../services/crudExpense/put"

export const expensesRoutes = Router()

// ─── Gastos Mensuales ───────────────────────────────────────────────────────────────

expensesRoutes.get("/api/expenses", getExpensesGym)

expensesRoutes.post("/api/expense", authToken, postExpenseGym)

expensesRoutes.delete("/api/expense/:id", authToken, deleteExpensesGym)

expensesRoutes.put("/api/expense/:id", authToken, putExpensesGym)