import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Page from './Page';
import Sidebar from './Sidebar'

const Router = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Page/>,
        },
        {
          path: "/name",
          element: <Page/>,
        },
      ]);
  return (
<>
<Sidebar>
<RouterProvider router={router} />
</Sidebar>
</>
  )
}

export default Router