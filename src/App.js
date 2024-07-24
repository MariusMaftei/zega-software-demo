import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./pages/Root";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import HireDevelopers from "./pages/hire-developers";
import "./App.css";
import ApplyToJobs from "./pages/apply-to-jobs";
import FullJobDescription from "./pages/full-job-description";
import HireDevelopersTeam from "./pages/hire-developers-team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/hire-developers", element: <HireDevelopers /> },
      { path: "/hire-developers-team", element: <HireDevelopersTeam /> },
      { path: "/apply-to-jobs", element: <ApplyToJobs /> },
      { path: "/job/:jobId", element: <FullJobDescription /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
