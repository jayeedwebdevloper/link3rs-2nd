import { createBrowserRouter } from "react-router-dom"
import Layout from "../shared/Layout/Layout"
import EnterSeassion from "../components/EnterSeassion/EnterSeassion"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <EnterSeassion />
            }
        ]
    }
])

export default router