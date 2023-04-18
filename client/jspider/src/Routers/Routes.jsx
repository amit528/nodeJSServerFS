import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "../Home"
import Student from "../Components/Student";
import CourseDetails from "../Components/CourseDetails";
import NavBar from "../Components/Navbar";
import SignUp from "../Pages/SignUp";

const NavRoutes = () =>{
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/courses" element={<CourseDetails />}></Route>
                <Route path="/students" element={<Student />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default NavRoutes;