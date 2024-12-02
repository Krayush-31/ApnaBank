import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Setting from "./Components/Setting";
// import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import { UserProvider } from "./Components/context/UserContext";
import Wallet from "./Components/Wallet";
import CardForm from "./Components/CardForm";
import Layout from "./Components/Layout";
import CreditUsers from "./Components/CreditUsers";
import Papplicants from "./Components/Papplicants";
import Notification from "./Components/Notification";
import LoginScreen from "./Components/Admin/LoginScreen";
import AdminDashBoard from "./Components/Admin/AdminDashBoard";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "dashboard",
          element: (
            <div>
              <Dashboard />
              {/* <Sidebar /> */}
            </div>
          ),
          children: [
            {
              path: "main",
              element: <Layout />,
              children: [
                { index: true, element: <Main /> },
                {
                  path: "cardform",
                  element: <CardForm />,
                },
              ],
            },
            {
              path: "notification",
              element: <Notification />,
            },
            {
              path: "wallet",
              element: <Wallet />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "setting",
              element: <Setting />,
            },
          ],
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "creditusers",
          element: <CreditUsers />,
        },
        {
          path: "papplicants",
          element: <Papplicants />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "cardform",
          element: <CardForm />,
        },
        {
          path: "admin",
          element: <Layout />,
          children: [
            { index: true, element: <LoginScreen/> },
            {
              path: "admindashboard",
              element: <AdminDashBoard />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
};

export default App;
