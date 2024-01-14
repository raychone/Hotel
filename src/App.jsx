// import components
import Header from "./components/Header";
import Footer from "./components/Footer";

// import pages
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";

import "./App.css";

// import react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/room/:id",
    element: <RoomDetails />,
  },
]);

function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
