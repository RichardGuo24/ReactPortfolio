import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header()
{
    const { pathname } = useLocation();
    const isResume = pathname === "/resume";

    // Theme state (persist + reflect on <html>)
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
    useEffect(() =>
    {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Mobile menu
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen((v) => !v);
    const closeMenu = () => setMenuOpen(false);

    // Shared bits
    const Logo = (
        <h1 id="logo">
            <NavLink to="/" onClick={closeMenu}>
                <img src="/assets/logo.png" alt="Your Logo" />
            </NavLink>
        </h1>
    );

    const ThemeSwitch = (
        <li className="theme-switch">
            <input
                type="checkbox"
                id="theme-switch"
                checked={theme === "dark"}
                onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            />
            <label className="toggle-icons" htmlFor="theme-switch" title="Toggle theme">
                <img className="moon" src="/assets/moon.svg" alt="moon" />
                <img className="sun" src="/assets/sun.svg" alt="sun" />
            </label>
        </li>
    );

    return (
        <header>
            <nav className="navbar">
                <div className="container">
                    {Logo}

                    {/* Menu */}
                    <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
                        {!isResume ? (
                            <>
                                <li><a className="nav-link" href="#projects" onClick={closeMenu}>PROJECTS</a></li>
                                <li><a className="nav-link" href="#footer" onClick={closeMenu}>CONTACT</a></li>
                                <li>
                                    <NavLink
                                        to="/resume"
                                        className="nav-link btn btn-primary"
                                        onClick={closeMenu}
                                    >
                                        RESUME <i className="fas fa-arrow-right" />
                                    </NavLink>
                                </li>
                                {ThemeSwitch}
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink
                                        to="/"
                                        className="nav-link btn btn-primary"
                                        onClick={closeMenu}
                                    >
                                        Back <i className="fas fa-arrow-right" />
                                    </NavLink>
                                </li>
                                {ThemeSwitch}
                            </>
                        )}
                    </ul>

                    {/* Hamburger */}
                    <button
                        className={`hamburger ${menuOpen ? "active" : ""}`}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                        onClick={toggleMenu}
                        type="button"
                    >
                        <span className="bar" />
                        <span className="bar" />
                        <span className="bar" />
                    </button>
                </div>
            </nav>
        </header>
    );
}
