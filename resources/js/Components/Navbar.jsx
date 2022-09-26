import NavLink from "./NavLink";
import { Link, usePage } from "@inertiajs/inertia-react";
import { HiHome, HiNewspaper } from "react-icons/hi";
import ApplicationLogo from "./ApplicationLogo";
import Theme from "@/Components/Theme";
import { MdMovie } from "react-icons/md";

const Navbar = ({ auth }) => {
    const { url } = usePage();

    return (
        <div>
            <div className="btm-nav sm:hidden z-10">
                <Link href="/" className={url === "/" ? "active" : ""}>
                    <HiHome />
                </Link>
                <Link href="/news" className={url.startsWith("/news") ? "active" : ""}>
                    <HiNewspaper />
                </Link>

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

            <div className="navbar bg-base-100 shadow-sm hidden sm:flex fixed top-0 z-10">
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

                <div className="flex-none gap-2">
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
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/register">Register</Link>
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
    );
};

export default Navbar;
