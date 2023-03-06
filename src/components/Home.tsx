import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IndexPage from "./IndexPage";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import UpdateProfile from "./UpdateProfile";

const Router = () => {
  // store users details
  const [state, setState] = useState<any>({ loading: true, users: [] });

  // to fetch api and get data of users
  useEffect(() => {
    try {
      fetch("https://dummyjson.com/users")
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((data) => {
          state.loading = false;
          state.users = data.users;
          setState({ ...state });
        });
    } catch (er) {
      console.log("Home Page error:", er);
    }
  }, []);

// router details
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Sidebar state={state} />,
      children: [
        {
          path: "/:msg?",
          element: <IndexPage />,
        },
        {
          path: "profile/:userId",
          element: <Profile state={state} setState={setState} />,
        },
        {
          path: "update/:userId",
          element: <UpdateProfile state={state} setState={setState} />,
        },
        {
          path: "/*",
          element: <IndexPage/>,
        },
      ],
    },
    {
      path: "/*",
      element: <Sidebar state={state} />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
