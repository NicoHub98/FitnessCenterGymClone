import { Router } from "express"
import { adminRoutes } from "./admin.routes";
import { elementRoutes } from "./element.routes";
import { providerRoutes } from "./provider.routes";
import { groupClassRoutes } from "./groupClass.routes";
import { expensesRoutes } from "./expenses.routes";
import { incomeRoutes } from "./income.routes";
import { clientRoutes } from "./client.routes";
import { employeeRoutes } from "./employee.routes";

export const router = Router()

router.use(adminRoutes)

router.use(elementRoutes)

router.use(providerRoutes)

router.use(groupClassRoutes)

router.use(expensesRoutes)

router.use(incomeRoutes)

router.use(clientRoutes)

router.use(employeeRoutes)