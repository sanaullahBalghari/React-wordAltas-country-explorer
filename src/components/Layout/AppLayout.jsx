import { Headers } from "../Ui/Header"
import { Footer } from "../Ui/Footer"
import { Outlet } from "react-router-dom"
export const AppLayout=()=>{

    return (
        <>
        <Headers/>
        <Outlet/>
        <Footer/>
        </>
    )
}