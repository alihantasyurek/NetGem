import Login from "./Login.jsx";
import Browse from "./Browse.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import WatchPage from "./Watch/WatchPage.jsx";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/watch/:videoId",
      element: <WatchPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
