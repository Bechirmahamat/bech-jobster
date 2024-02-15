import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Landing, Login, Register } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
        errorElement: <Error />,
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <Error />,
    },
]);
const App = () => {
    return <RouterProvider router={router}></RouterProvider>;
};
export default App;
