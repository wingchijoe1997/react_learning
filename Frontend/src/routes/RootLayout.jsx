import { Outlet } from "react-router-dom";

import MainHeader from "../components/MainHeader";
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import MainNavBar from "../components/MainNavBar";
function RootLayout(){
    return <>
        <ResponsiveAppBar></ResponsiveAppBar>
        <MainHeader></MainHeader>
        <Outlet></Outlet>
    </>
}

export default RootLayout;