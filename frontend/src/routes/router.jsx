import { createBrowserRouter } from "react-router-dom";

import Login from "../components/users/Login";
import Register from "../components/users/Register";
import Home from "../pages/users/Home/Home";
import Book from "../pages/users/book/book";
import AdminDashboard from "../pages/admin/AdminDashboard";

import AdminLayouts from "../layouts/AdminLayouts";
import BookingsList from "../pages/admin/BookingsList";
import ContactsMessages from "../pages/admin/ContactMessages";
import ViewOrders from "../pages/users/orders/ViewOrders";
import Services from "../pages/users/Home/Services";
import Pricing from "../pages/users/Home/Pricing";
import AboutUs from "../pages/users/Home/AboutUs";
import ContactUs from "../pages/users/Home/ContactUs";
import Profile from "../components/Profile";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../pages/admin/MyProfile";
import UserLayout from "../layouts/UserLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />, // User layout with navbar/footer
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/book",
        element: (
          <PrivateRoute>
            <Book />
          </PrivateRoute>
        ),
      },
      {
        path: "/vieworders",
        element: (
          <PrivateRoute>
            <ViewOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayouts />, // Admin layout (no navbar/footer)
    children: [
      {
        path: "",
        element: <AdminDashboard />,
      },
      {
        path: "bookingslist",
        element: <BookingsList />,
      },
      {
        path: "contactmessages",
        element: <ContactsMessages />,
      },
      {
        path: "profile",
        element: <MyProfile />,
      }
      
    ],
  },
]);

export default router;
