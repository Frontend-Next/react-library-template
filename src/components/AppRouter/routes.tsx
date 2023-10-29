import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Demo } from "../Demo";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "demo",
        element: <Demo />,
      },
    ],
  },
]);
