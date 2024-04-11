import Body from "./components/landingPage/Body";
import Header from "./components/landingPage/Header";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ReactBasic from "./components/learnReact/ReactBasic";
import Bundlers from "./components/learnReact/Bundlers";

import Error from "./components/Error";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/learn/react-basic",
        element: <ReactBasic />,
      },
      {
        path: "/learn/bundlers",
        element: <Bundlers />,
      },
    ],
    errorElement: <Error />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
};

export default App;
