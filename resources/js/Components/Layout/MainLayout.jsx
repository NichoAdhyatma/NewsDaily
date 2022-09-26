import Navbar from "../Navbar";
import { BsFillMoonFill } from "react-icons/bs";
import { useState } from "react";

const MainLayout = ({ children, auth }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    const handleTheme = () => {
        if (localStorage.getItem("theme") == "dark") {
            localStorage.setItem("theme", "light");
            setTheme("light")
        }
        else {
            localStorage.setItem("theme", "dark");
            setTheme("dark")
        }
    };

    console.log(theme)

    return (
        <div data-theme={theme} className="min-h-screen pb-24 w-full">
            <BsFillMoonFill
                onClick={() => {
                    handleTheme();
                }}
                className="cursor-pointer fixed  top-5 right-10 sm:right-24 text-3xl z-20"
            />
            <Navbar auth={auth} />

            {children}
        </div>
    );
};

export default MainLayout;
