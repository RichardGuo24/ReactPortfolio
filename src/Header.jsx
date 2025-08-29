import { NavLink } from "react-router-dom";

export default function Header({ type })
{
    if (type === "home")
    {
        return (
            <header>
                <nav className="navbar">
                    <div className="container">
                        {/* Logo */}
                        <h1 id="logo">
                            <a href="/">
                                <img src="/assets/logo.png" alt="Your Logo" />
                            </a>
                        </h1>

                        {/* NavBarLinks */}
                        <ul className="nav-menu">
                            <li><a className="nav-link" href="#projects">PROJECTS</a></li>
                            <li><a className="nav-link" href="#footer">CONTACT</a></li>
                            <li>

                                <NavLink
                                    to="/resume"
                                    className="nav-link btn btn-primary"
                                >
                                    RESUME <i className="fas fa-arrow-right" />
                                </NavLink>

                            </li>

                            {/* Toggle Switch */}
                            <div className="theme-switch">
                                <input type="checkbox" id="switch" />
                                <label className="toggle-icons" htmlFor="switch">
                                    <img className="moon" src="/assets/moon.svg" alt="moon" />
                                    <img className="sun" src="/assets/sun.svg" alt="sun" />
                                </label>
                            </div>
                        </ul>

                        {/* Hamburger Menu */}
                        <div className="hamburger">
                            <span className="bar" />
                            <span className="bar" />
                            <span className="bar" />
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
    if (type === "resume")
    {
        return (
            <header>
                <nav className="navbar">
                    <div className="container">
                        {/* Logo */}
                        <h1 id="logo">
                            <a href="/">
                                <img src="/assets/logo.png" alt="Your Logo" />
                            </a>
                        </h1>

                        {/* NavBarLinks */}
                        <ul className="nav-menu">
                            <li>

                                <NavLink
                                    to="/"
                                    className="nav-link btn btn-primary"
                                >
                                    Back <i className="fas fa-arrow-right" />
                                </NavLink>

                            </li>

                            {/* Toggle Switch */}
                            <div className="theme-switch">
                                <input type="checkbox" id="switch" />
                                <label className="toggle-icons" htmlFor="switch">
                                    <img className="moon" src="/assets/moon.svg" alt="moon" />
                                    <img className="sun" src="/assets/sun.svg" alt="sun" />
                                </label>
                            </div>
                        </ul>

                        {/* Hamburger Menu */}
                        <div className="hamburger">
                            <span className="bar" />
                            <span className="bar" />
                            <span className="bar" />
                        </div>
                    </div>
                </nav>
            </header>)
    }

}
