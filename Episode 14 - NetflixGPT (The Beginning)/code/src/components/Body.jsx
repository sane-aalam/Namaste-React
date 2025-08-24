import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Login";
import Browse from "./Browse";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

// useDispatch(): This hook returns a reference to the dispatch function from the Redux store.
// useSelector(): This hook allows functional components to extract data from the Redux store's state.
// let's dispatch the actions
// let's read the reduxStore the data using useSelector 

const Body = () => {
  const dispatch = useDispatch();
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

  // onAuthStateChanged + useEffect run,when user is authentication,user signout,signin,update profile
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("onAuthStateChanged Run!");
        dispatch(addUser(user));
      } else {
        console.log("error");
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  );
};
export default Body;
