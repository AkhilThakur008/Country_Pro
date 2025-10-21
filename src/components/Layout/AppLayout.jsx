import { Outlet } from "react-router-dom";
import { Footers } from "../UI/Footers";
import { Header } from "../UI/Header";

export const AppLayout = () => {
    return (
<>
    <Header/>
    <Outlet/>
    <Footers/>
</>
);
}