import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import Brands from "../Pages/Brands/Brands";

const routes = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('http://localhost:5000/brand')
            },
            {
                path:'/addproduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/mycart',
                element:<MyCart></MyCart>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: 'Register',
                element:<Register></Register>
            },
            {
                path: '/about',
                element:<About></About>
            },
            {
                path: '/contactus',
                element: <Contact></Contact>
            },
            {
                path: '/update/:id',
                element:<UpdateProduct></UpdateProduct>,
                loader: ({params}) => fetch(`http://localhost:5000/cars/${params.id}`)
            },
            {
                path: '/brands',
                element:<Brands></Brands>
            }
        ]
    }
]);

export default routes;