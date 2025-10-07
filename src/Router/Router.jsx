import React, { Children } from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    Children: [{}],
  },
]);

export default router;
