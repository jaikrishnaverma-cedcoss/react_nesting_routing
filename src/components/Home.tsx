import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IndexPage from './IndexPage';
import Profile from './Profile';
import Sidebar from './Sidebar'

const Router = () => {
  const [state, setState] = useState({ loading: true, users: [] });

  useEffect(() => {
    try{
    fetch("https://dummyjson.com/users")
      .then((res) => { console.log(res); return res.json()})
      .then((data) => {
        state.loading = false;
        state.users = data.users;
        setState({ ...state });
      }
      );
    } catch(er){
      console.log('Home Page error:',er)
    }
  }, []);
  console.log(state.users);
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Sidebar state={state} />,
          children:[
            {
              path: "/:msg?",
              element: <IndexPage/>,
            },
            {
              path: "profile/:userId",
              element: <Profile state={state} setState={setState}/>,
            }
          ]
        },
      ]);
  return (
<>
<RouterProvider router={router} />
</>
  )
}

export default Router