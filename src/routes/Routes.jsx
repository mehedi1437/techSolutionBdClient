import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Blog from "../pages/Blog";
import Pricing from "../pages/Pricing";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../layouts/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers";
import ServiceManagement from "../pages/Dashboard/ServiceManagement";
import UpdateAService from "../pages/Dashboard/UpdateAService";
import PriceManagement from "../pages/Dashboard/PriceManagement";
import UpdatePricingPlan from "../pages/Dashboard/UpdatePricingPlan";
import TeamManagement from "../pages/Dashboard/TeamManagement";
import UpdateAMember from "../pages/Dashboard/UpdateAMember";
import PrivateRoutes from "./privateroutes";
import Adminroutes from "./Adminroutes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/price",
        element: <Pricing></Pricing>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  // Admin Routes Only
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Adminroutes>
          <Dashboard></Dashboard>
        </Adminroutes>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "service-management",
        element: <ServiceManagement></ServiceManagement>,
      },
      {
        path: "update-service/:id",
        element: <UpdateAService></UpdateAService>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/service/${params.id}`),
      },
      {
        path: "price-management",
        element: <PriceManagement></PriceManagement>,
      },
      {
        path: "update-price/:id",
        element: <UpdatePricingPlan></UpdatePricingPlan>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/price/${params.id}`),
      },
      {
        path: "team-management",
        element: <TeamManagement></TeamManagement>,
      },
      {
        path: "update-member/:id",
        element: <UpdateAMember></UpdateAMember>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/team/${params.id}`),
      },
    ],
  },
]);

export default router;
