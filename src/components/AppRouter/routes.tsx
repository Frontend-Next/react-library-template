import { App } from "components/App";
import { Demo } from "components/Demo";
import { createBrowserRouter } from "react-router-dom";

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
