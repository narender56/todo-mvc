import React from "react";
import { RouterProvider } from "react-router-dom";

import { AppFooter } from "./Organisms";
import router from "./Routes";

export default function App() {
  return  (
    <>
      <RouterProvider router={router} />
      <AppFooter />
    </>
  );
}
