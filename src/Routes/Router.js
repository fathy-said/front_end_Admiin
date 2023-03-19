import { createBrowserRouter } from "react-router-dom";
import Brand from "./Pages/Brand";
import Dashboard from "./Pages/Dashboard";
import Layout from "./Pages/Layout";
import Login from "./Pages/Login";
import Services from "./Pages/Services/Services";
import Shop from "./Pages/Shop";
import Products from "./Pages/Products/Products";

export let Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,

    errorElement: <div>errorElement</div>,

  },
  {
    path: "/admin",
    element: <Layout />,
    errorElement: <div>errorElementS</div>,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "brand",
        element: <Brand />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        // path: "admin",
        // element: <Admin />,
        // loader: async (e) => {
        //   if (localStorage.AccessToken) {
        //   }
        //   return e
        // },
      },
    ],
  },


]);
