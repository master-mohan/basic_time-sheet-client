import { RouterProvider } from "react-router-dom";
import Routers from "./routers/Router";



function App() {
  const router = Routers();
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
