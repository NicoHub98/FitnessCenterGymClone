import { Router } from "express"
import { deleteEmployesGym } from "../services/crudEmployees/delete";
import { upDateEmployees } from "../services/crudEmployees/put";
import { getAllEmployees } from "../services/crudEmployees/get";
import { postEmployees } from "../services/crudEmployees/post";
import { authToken } from "../middlewares/authToken";

export const employeeRoutes = Router()

// ─── Clientes ─────────────────────────────────────────────────────────────────

employeeRoutes.get("/api/employees", getAllEmployees)

employeeRoutes.post("/api/employee", authToken, postEmployees)

employeeRoutes.put("/api/employee/:id", authToken, upDateEmployees)

employeeRoutes.delete("/api/employee/:id", authToken, deleteEmployesGym)
