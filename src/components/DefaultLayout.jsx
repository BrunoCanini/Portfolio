import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import TheFooter from "../pages/TheFooter";

export default function DefaultLayout(){
    return(
        <div className="flex flex-col gap-40">
            <Home></Home>
            <Outlet></Outlet>
            <TheFooter></TheFooter>
        </div>
    )
}