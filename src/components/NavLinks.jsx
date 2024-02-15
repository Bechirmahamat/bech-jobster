import { Link } from "react-router-dom";

const data = [
    { url: "/", text: "Home" },
    { url: "/demos", text: "Demos" },
    { url: "/jobs", text: "Find Jobs" },
    { url: "/candidates", text: "Candidates" },
    { url: "/", text: "Pages" },
    { url: "/", text: "Home" },
];

const NavLinks = () => {
    return (
        <ul className="menu menu-vertical md:menu-horizontal ">
            {data.map((item, index) => {
                return (
                    <li key={index}>
                        <Link
                            to={item.url}
                            className="text-md lg:text-lg p-2 font-semibold hover:text-neutral-500 duration-200 transition"
                        >
                            {item.text}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
export default NavLinks;
