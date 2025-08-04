import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import ErrorPage from "./src/Components/ErrorPage";
import RestaurantMenu from "./src/Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./src/Components/Footer";
import { Provider } from "react-redux";
import appStore from "./src/Utils/AppStore";

// lazy laoding
const About = lazy(() => import("./src/Components/About"));
const Body = lazy(() => import("./src/Components/Body"));
const RestaurantMenu = lazy(() => import("./src/Components/RestaurantMenu"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <>
        <Header />
        <Outlet />
        <div className="border-t border-gray-200 my-5"></div>
        <Footer />
      </>
    </Provider>
  );
};

const appRounter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRounter} />);
