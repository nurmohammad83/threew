import Home from "./Component/Home";
import './custom.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from "./Component/Signup";
import Signin from "./Component/Signin";
import Main from "./Component/Layout/Main";
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/signup',
          element:<Signup/>
        },
        {
          path:'/signin',
          element:<Signin/>
        },
        
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
