import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        // element: <Home></Home>,
      },
    ],
  },
]);
export default router;
