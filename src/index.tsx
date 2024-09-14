import { createRoot } from "react-dom/client";
import { HomePage } from "./pages/HomePage";
import "./global.less";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { Layout } from "./components/Layout";

export const App = (): JSX.Element => {
  return (
    <Suspense fallback="loading">
      <Layout>
        <Outlet />
      </Layout>
    </Suspense>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

createRoot(document.querySelector("#app")!).render(
  <RouterProvider router={router} />
);
