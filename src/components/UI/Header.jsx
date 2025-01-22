import { useState } from "react"
import { NavLink } from "react-router-dom"
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";

export const Header = ({ setTheme }) => {

    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu);
    }

    const handleThemeBtn = () => {
        setTheme();
    }


    return (
        <header className=" dark1 shadow-md font-Salsa" >

            <section className=" container flex flex-row justify-between p-5 items-center ">

                <figure className="w-[70%]">
                    <img src="\logo.png" alt=""
                        className="w-fit h-[2rem]"
                    />
                </figure>


                <section className="flex gap-5 w-full justify-end  md:justify-between">

                    <div onClick={handleMenu}
                        className="md:hidden order-3"
                    >
                        {
                            menu ? <IoClose /> : <TiThMenu />
                        }
                    </div>

                    <ul className="hidden md:flex w-fit gap-8 md:flex-row justify-between ">
                        <li className="menu-li"> <NavLink to={"/"} > BMI Calculator </NavLink> </li>
                        <li className="menu-li"> <NavLink to={"/stopwatch"}> StopWatch </NavLink> </li>
                        <li className="menu-li"> <NavLink to={"/gallery"} > Gallery </NavLink> </li>
                    </ul>

                    <button onClick={handleThemeBtn}> <MdOutlineLightMode /> </button>

                </section>


            </section>

            <ul className={` ${menu ? "flex flex-col " : "hidden"} absolute md:hidden bg-white p-5 w-screen gap-2  justify-between dark1`}>
                <li>
                    <NavLink to={"/"}
                        className="menu-hover"
                    > BMI Calculator </NavLink>
                </li>
                <li>
                    <NavLink to={"/stopwatch"}
                        className="menu-hover"
                    > StopWatch </NavLink>
                </li>
                <li>
                    <NavLink to={"/gallery"}
                        className="menu-hover"
                    > Gallery </NavLink>
                </li>

            </ul>

        </header>
    )
}

