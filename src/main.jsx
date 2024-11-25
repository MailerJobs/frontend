import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { Provider } from "react-redux";
import React from "react";
import HomePage from "./pages/Home-page.tsx";
import {
  createBrowserRouter,
  Router,
  RouterProvider,
  // @ts-ignore
} from "react-router-dom";
import JobsPage from "./pages/Jobs-page.tsx";
import ContextProvider from "./components/context/job_list_context.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/jobs",
    element: <JobsPage />,
  },
]);

// @ts-ignore
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);
