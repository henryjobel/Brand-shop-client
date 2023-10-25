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
import Details from "../Pages/Detailspage/Details";
import FeaturedCarsCard from "../Components/FeaturedVcles/FeaturedCarsCard";
import CarsDetails from "../Pages/CarsDetails/CarsDetails";
import PrivateRoutes from "./Privateroutes/PrivateRoutes";

const routes = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://brand-shop-server-kayrq3whi-henryjobels-projects.vercel.app/brand')
            },
            {
                path: '/details/:id',
                element: <PrivateRoutes><Details></Details></PrivateRoutes>,
                loader: () => fetch(`https://brand-shop-server-kayrq3whi-henryjobels-projects.vercel.app/cars`)
            },
            {
                path: '/addproduct',
                element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
            },
            {
                path: '/mycart',
                element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'Register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contactus',
                element: <Contact></Contact>
            },
            {
                path: '/update/:id',
                element: <PrivateRoutes><UpdateProduct></UpdateProduct>,</PrivateRoutes>,
                loader: ({ params }) => fetch(`https://brand-shop-server-kayrq3whi-henryjobels-projects.vercel.app/cars/${params.id}`)
            },
            {
                path: '/brands',
                element: <Brands></Brands>
            },
            {
                path: '/feturedCars',
                element: <PrivateRoutes><FeaturedCarsCard></FeaturedCarsCard></PrivateRoutes>,

            },
            {
                path: '/carsdetail/:id',
                element: <PrivateRoutes><CarsDetails></CarsDetails></PrivateRoutes>,
            }
        ]

    }
]);

export default routes;