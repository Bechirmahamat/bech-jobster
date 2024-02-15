import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className=" py-3 sticky top-0  ">
            <nav className="static-width items-center flex justify-between">
                <h2 className="text-3xl items-center gap-x-6 font-extrabold tracking-wider">
                    Job<span className="text-sky-500">ster</span>
                </h2>
                <div className=" place-content-center hidden md:block">
                    <NavLinks />
                </div>
                <div className="">
                    <div className="">
                        <Link
                            to={"/login"}
                            className="hidden md:inline-flex btn rounded-full px-6 text-lg capitalize btn-outline"
                        >
                            login
                        </Link>
                    </div>
                    <div className="dropdown md:hidden">
                        <label
                            tabIndex={0}
                            className="text-2xl btn font-semibold"
                            htmlFor=""
                        >
                            <FaBarsStaggered />
                        </label>
                        <div
                            tabIndex={0}
                            className="dropdown-content z-10 mt-2 rounded-md right-0 w-56 bg-base-300"
                        >
                            <NavLinks />
                            <div className="menu gap-2 w-full">
                                <Link
                                    to={"/login"}
                                    className="btn w-full  btn-outline rounded-full text-lg  "
                                >
                                    login
                                </Link>
                                <Link
                                    to={"/login"}
                                    className="btn w-full   btn-primary rounded-full text-lg  "
                                >
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;
