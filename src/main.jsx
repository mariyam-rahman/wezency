import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Statistics from "./Components/Statistics/Statistics";
import AppliedJobs from "./Components/Applied-Jobs/AppliedJobs";
import Blog from "./Components/Blog/Blog";
import WebContainer from "./Components/WebContainer/WebContainer";
import Details from "./Components/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WebContainer></WebContainer>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "details",
        element: <Details></Details>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
