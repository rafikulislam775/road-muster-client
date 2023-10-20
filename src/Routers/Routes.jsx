import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../components/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddProduct from "../pages/AddProduct/AddProduct";
import SingleBrand from "../pages/singleBrand/SingleBrand";
import CarDetails from "../pages/CarDetails/CarDetails";
import PrivateRoute from "./privateRoute/PrivateRoute";
import ErrorPage from "../pages/Error/ErrorPage";
import Contact from "../pages/Contact/Contact";
import MyCarts from "../pages/MyCart/MyCarts";
import About from "../pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    // errorElement: <ErrorPage />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/singleBrand/:category",
        element: <SingleBrand></SingleBrand>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/addProducts/${params?.category}`),
      },
      {
        path: "/details/:id",

        element: (
          <PrivateRoute>
            <CarDetails></CarDetails>
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:4000/addProducts`),
      },
      {
        path: "/contactUs",
        element: <Contact></Contact>,
      },
      {
        path: "/myCarts",

        element: (
          <PrivateRoute>
            <MyCarts></MyCarts>
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:4000/myCarts`),
      },
      {
        path: "/aboutUs",
        element: <About></About>,
      },
    ],
  },
]);
export default router;
