import React from "react";
import { createBrowserRouter } from "react-router-dom";

import TodosContextProvider from "../Context/TodosContext";
import Todos from "../Pages/Todos";

export default createBrowserRouter([
  {
    path: "/",
    element: (
      <TodosContextProvider>
        <Todos />
      </TodosContextProvider>
    ),
  },
]);
