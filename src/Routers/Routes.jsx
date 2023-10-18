import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);
export default router;
