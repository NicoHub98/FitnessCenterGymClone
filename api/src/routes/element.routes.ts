import { Router } from "express"
import { authToken } from "../middlewares/authToken";
import { deleteElementsGym } from "../services/crudElements/delete";
import { getElementsGym } from "../services/crudElements/get";
import { postRelationElements } from "../services/crudElements/post";
import { putElemetsGym } from "../services/crudElements/put";

export const elementRoutes = Router()

// ─── Productos ───────────────────────────────────────────────────────────────

elementRoutes.get("/api/elements", getElementsGym);

// RELACION ELEMENTO VS PROVEEDOR VS ADMIN
elementRoutes.post("/api/element-client", authToken, postRelationElements);

elementRoutes.put("/api/elements/:id", authToken, putElemetsGym);

elementRoutes.delete("/api/elements/:id", authToken, deleteElementsGym);
