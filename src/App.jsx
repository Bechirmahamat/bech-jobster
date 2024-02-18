import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
    Add_Jobs,
    AllJobs,
    DashboardLanding,
    DashboardLayout,
    Landing,
    Login,
    LoginProtected,
    Profile,
    Protected,
    Register,
    SingleError,
} from './pages'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
        errorElement: <Error />,
    },
    {
        path: '/login',
        element: (
            <LoginProtected>
                <Login />
            </LoginProtected>
        ),
        errorElement: <Error />,
    },
    {
        path: '/dashboard',
        errorElement: <Error />,
        element: (
            <Protected>
                <DashboardLayout />
            </Protected>
        ),
        children: [
            {
                index: true,
                element: <DashboardLanding />,
                errorElement: <SingleError />,
            },
            {
                path: 'all-jobs',
                element: <AllJobs />,
                errorElement: <SingleError />,
            },
            {
                path: 'add-job',
                element: <Add_Jobs />,
                errorElement: <SingleError />,
            },
            {
                path: 'profile',
                element: <Profile />,
                errorElement: <SingleError />,
            },
        ],
    },
    {
        path: '/register',
        element: <Register />,
        errorElement: <Error />,
    },
])
const App = () => {
    return <RouterProvider router={router}></RouterProvider>
}
export default App
