import { Outlet } from "react-router-dom"
import { Header } from "../UI/Header"

export const AppLayout = ({ setTheme}) => {

    return (
        <>
            <Header
                setTheme={setTheme}
            />
            <Outlet />
        </>
    )
}