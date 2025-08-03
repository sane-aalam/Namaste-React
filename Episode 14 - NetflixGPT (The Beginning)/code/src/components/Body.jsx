import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import Login from "./Login";
import Browse from "./Browse";


const Body = () => {
    const AppRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
    ]);

    return (
        <div>
            <RouterProvider router={AppRouter} />
        </div>
    )
}
export default Body;    