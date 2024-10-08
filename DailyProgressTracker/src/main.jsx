import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./componets/HomePage/HomePage.jsx";
import AddNewTask from "./componets/AddnewTask/AddNewTask.jsx";
import Parent from "./componets/groups/Parent.jsx";
import { Provider } from "react-redux";
import StoreConfig from "../redux/Store.config.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/add",
        element: <AddNewTask />,
      },
      {
        path: "/data",
        element: <Parent />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={StoreConfig}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
