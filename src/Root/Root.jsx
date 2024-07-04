import { Outlet } from "react-router-dom";
import Navbar from "../Component/Shared/Navbar";
import Footer from "../Component/Shared/Footer";


const Root = () => {
    return (
        <div className="container bg-gray-900 bg-opacity-50 bg-tech-background bg-repeat bg-contain bg-fixed bg-center  mx-auto min-h-screen flex flex-col ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;