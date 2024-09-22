import { NavLink } from "react-router-dom";

export default function Nav () {

    const menuItems = [
        { label: "Главная", link: "/" },
        { label: "Дрифт-такси", link: "/drift" },
        { label: "Time Attack", link: "/timeattack" },
        { label: "Forza Karting", link: "/forza" },
    ];

    return (
        <nav className="menu">
            {menuItems.map(({ label, link }) => (
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "menu__item-active" : "menu__item"
                    }
                    key={label} to={link}>{label.toUpperCase()}<a>{label.toUpperCase()}</a>
                </NavLink>
            ))}
        </nav>
    );
}