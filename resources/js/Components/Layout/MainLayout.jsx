import { useState } from "react";
import ApplicationLogo from "../ApplicationLogo";
import { Link, usePage } from "@inertiajs/inertia-react";
import { HiHome, HiNewspaper } from "react-icons/hi";
import Theme from "@/Components/Theme";
import { MdMovie } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import NavLink from "../NavLink";

const MainLayout = ({ children, auth }) => {
    const { url } = usePage();
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    const themeDatas = [
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
    ];

    const handleChange = (item) => {
        localStorage.setItem("theme", item);
        setTheme(localStorage.getItem("theme"));
    };

    return (
        <div data-theme={theme} className="min-h-screen  w-full">
            <div>
                <div className="btm-nav sm:hidden z-10 shadow-md">
                    <Link href="/" className={url === "/" ? "active" : ""}>
                        <HiHome />
                    </Link>

                    <Link
                        href="/news"
                        className={url.startsWith("/news") ? "active" : ""}
                    >
                        <HiNewspaper />
                    </Link>

                    <label
                        htmlFor="my-drawer-4"
                        className="drawer-button rounded-full bg-primary text-white text-xl mb-7"
                    >
                        <BsMoonStarsFill />
                    </label>

                    <Link href="/m" className={url === "/m" ? "active" : ""}>
                        <MdMovie />
                    </Link>
                    <div className="dropdown dropdown-top dropdown-end flex">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                        >
                            {auth.user ? (
                                <>
                                    <li>
                                        <Link
                                            href={route("dashboard")}
                                            className="text-sm"
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                            className="text-sm"
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link
                                            href="/login"
                                            className="justify-between"
                                        >
                                            Login
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/register">Register</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>

                <div className="navbar bg-base-100 hidden sm:flex fixed top-0 z-10 shadow-md">
                    <div className="flex-1 gap-3">
                        <Link href="/">
                            <ApplicationLogo />
                        </Link>
                        <NavLink
                            href="/"
                            active={url === "/" ? true : false}
                            children={<HiHome />}
                            className="text-3xl"
                        />

                        <NavLink
                            href="/news"
                            active={url.startsWith("/news") ? true : false}
                            children={<HiNewspaper />}
                        />

                        <NavLink
                            href="/m"
                            active={url === "/m" ? true : false}
                            children={<MdMovie />}
                            className="text-3xl"
                        />
                    </div>

                    <div className="flex-none gap-5">
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex="0"
                                className="btn gap-1 normal-case btn-ghost"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                    ></path>
                                </svg>{" "}
                                <span className="hidden md:inline">Theme</span>{" "}
                                <svg
                                    width="12px"
                                    height="12px"
                                    className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 2048 2048"
                                >
                                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu p-2 shadow bg-base-100 max-h-96 overflow-y-scroll rounded-box w-56"
                            >
                                {themeDatas.map((item, i) => {
                                    return (
                                        <li key={i}>
                                            <button
                                                className="btn-ghost w-full"
                                                onClick={() =>
                                                    handleChange(item)
                                                }
                                            >
                                                <div
                                                    data-theme={item}
                                                    className="flex items-center gap-2 font-bold p-2 w-full rounded"
                                                >
                                                    {item}
                                                    <div className="flex items-center gap-1">
                                                        <div className="bg-primary w-3 rounded p-1"></div>
                                                        <div className="bg-secondary w-3 rounded p-1"></div>
                                                        <div className="bg-neutral w-3 rounded p-1"></div>
                                                        <div className="bg-accent w-3 rounded p-1"></div>
                                                    </div>
                                                </div>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="dropdown dropdown-end">
                            <label
                                tabIndex={0}
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people" />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                            >
                                {auth.user ? (
                                    <>
                                        <li>
                                            <Link
                                                href={route("dashboard")}
                                                className="text-sm"
                                            >
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                                className="text-sm"
                                            >
                                                Logout
                                            </Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <Link
                                                href="/login"
                                                className="justify-between"
                                            >
                                                Login
                                                <span className="badge">
                                                    New
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/register">
                                                Register
                                            </Link>
                                        </li>
                                    </>
                                )}
                                <li>
                                    <Theme />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:py-3"></div>

            {children}

            <footer className="footer footer-center p-10 mt-5">
                <div>
                    <ApplicationLogo />
                    <p className="font-bold">
                        NewsDaily Ltd. <br />
                        Providing reliable News and Film since 2022
                    </p>
                    <p>Copyright © 2022 - All right reserved</p>
                    <h1>{localStorage.getItem("theme")}</h1>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
