import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Watch from "./components/Watch";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/watch/:videoId",
        element: <Watch />,
      },
    ],
  },
]);
export default App;
