import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/mainlayout/MainLayout";
import Home from './feature/home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        index:true,
        element:<Home/>
      }
    ]
  }
])


function App() {
  return <RouterProvider router={router} />;
}

export default App;
