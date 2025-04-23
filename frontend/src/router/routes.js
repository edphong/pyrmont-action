import { joinusRoutes } from "../feature/JoinUs/routes"
import { loginRoutes } from "../feature/Login/routes"

export const routes = [
    ...joinusRoutes,
    ...loginRoutes,
]