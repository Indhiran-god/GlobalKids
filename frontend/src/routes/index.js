import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from '../pages/Home'; 
import Login from '../pages/Login'; 
import ForgotPassword from '../pages/ForgotPassword'; 
import SignUP from '../pages/SignUP'; 
import CheranMaNagar from '../pages/CheranMaNagar'; 
import About from '../pages/about'; 
import Contact from '../pages/contact'; 
import Homework from '../pages/homework'; // Import Homework page
import Classwork from '../pages/classwork'; // Import Classwork page
import Notice from '../pages/notice'; // Import Notice page
import Fees from '../pages/fees'; // Import Fees page
import Result from '../pages/result'; // Import Result page
import Photos from '../pages/photo'; // Import Photos page
import Birthday from '../pages/birthday';

const router = createBrowserRouter([
    {
        path: "*", // This will match all paths
        element: <App />, // Main app component
        children: [
            {
                path: "", // Root path
                element: <Home /> // Home component
            },
            {
                path: "login", // Login path
                element: <Login />
            },
            {
                path: "forgot-password", // Forgot password path
                element: <ForgotPassword />
            },
            {
                path: "sign-up", // Sign up path
                element: <SignUP />
            },
            {
                path: "cheran-ma-nagar", // Cheran Ma Nagar path
                element: <CheranMaNagar /> // Cheran Ma Nagar component
            },
            {
                path: "about", // About path
                element: <About /> // About component
            },
            {
                path: "contact", // Contact path
                element: <Contact /> // Contact component
            },
            {
                path: "homework", // Homework path
                element: <Homework /> // Homework component
            },
            {
                path: "classwork", // Classwork path
                element: <Classwork /> // Classwork component
            },
            {
                path: "notice", // Notice path
                element: <Notice /> // Notice component
            },
            {
                path: "birthday", // Cheayran Ma Nagar path
                element: <Birthday/> // Cheran Ma Nagar component
            },
            {
                path: "fees", // Fees path
                element: <Fees /> // Fees component
            },
            {
                path: "result", // Result path
                element: <Result /> // Result component
            },
            {
                path: "photos", // Photos path
                element: <Photos /> // Photos component
            },
        ]
    }
]);

export default router;
