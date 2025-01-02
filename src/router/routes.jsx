import { createBrowserRouter } from "react-router-dom"
import Cadastro from "../pages/Cadastro";


const router = createBrowserRouter([
   {path: `/`, element: <Cadastro/>}
])

export default router;