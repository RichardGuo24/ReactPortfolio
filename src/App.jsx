import { useEffect, useState } from "react";
import Profile from "./tabs/Profile.jsx";
import Projects from "./tabs/Projects.jsx";
import Resume from "./tabs/Resume.jsx";
import Comms from "./tabs/Comms.jsx";
import { CONTACTS } from "./data/profile.js";
import { isTypingTarget } from "./keys.js";

const TABS = [
    { id: "profile", label: "Profile", Panel: Profile },
    { id: "projects", label: "Projects", Panel: Projects },
    { id: "resume", label: "Resume", Panel: Resume },
    { id: "comms", label: "Comms", Panel: Comms },
];

const PHOSPHORS = [
    { id: "green", label: "Green", color: "#4bff8f" },
    { id: "amber", label: "Amber", color: "#ffb341" },
    { id: "blue", label: "Blue", color: "#6fd6ff" },
];

function tabFromLocation()
{
    const hash = window.location.hash.slice(1);
    if (TABS.some((t) => t.id === hash)) return hash;
    // Old links pointed at /resume
    if (window.location.pathname === "/resume") return "resume";
    return "projects";
}

function savedPhosphor()
{
    try
    {
        const saved = localStorage.getItem("phosphor");
        if (PHOSPHORS.some((p) => p.id === saved)) return saved;
    } catch { /* storage unavailable */ }
    return "green";
}

export default function App()
{
    const [tab, setTab] = useState(tabFromLocation);
    const [phosphor, setPhosphor] = useState(savedPhosphor);

    useEffect(() =>
    {
        const url = `/#${tab}`;
        if (window.location.pathname + window.location.hash !== url)
        {
            window.history.replaceState(null, "", url);
        }
    }, [tab]);

    useEffect(() =>
    {
        const onHashChange = () => setTab(tabFromLocation());
        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    useEffect(() =>
    {
        const { color } = PHOSPHORS.find((p) => p.id === phosphor);
        document.documentElement.style.setProperty("--ph", color);
        try { localStorage.setItem("phosphor", phosphor); } catch { /* storage unavailable */ }
    }, [phosphor]);

    // Left / right arrows switch tabs
    useEffect(() =>
    {
        const onKeyDown = (e) =>
        {
            if (e.altKey || e.ctrlKey || e.metaKey || isTypingTarget(e.target)) return;
            if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
            e.preventDefault();
            setTab((current) =>
            {
                const index = TABS.findIndex((t) => t.id === current);
                const step = e.key === "ArrowRight" ? 1 : -1;
                return TABS[(index + step + TABS.length) % TABS.length].id;
            });
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    const { Panel } = TABS.find((t) => t.id === tab);

    return (
        <div className="crt">
            <main className="screen">
                <header className="header">
                    <div>
                        <h1>Richard Guo</h1>
                        <p className="dim">CS @ Columbia // AI + Full Stack</p>
                    </div>
                    <div className="header-side">
                        <div className="phosphor" role="group" aria-label="Screen color">
                            <span className="dim">Phosphor</span>
                            {PHOSPHORS.map((p) => (
                                <button
                                    key={p.id}
                                    type="button"
                                    className="swatch"
                                    style={{ "--swatch": p.color }}
                                    aria-label={p.label}
                                    aria-pressed={phosphor === p.id}
                                    onClick={() => setPhosphor(p.id)}
                                />
                            ))}
                        </div>
                        <p className="hints dim">Arrows: navigate · Enter: launch</p>
                    </div>
                </header>

                <nav className="tabs">
                    <div className="tablist" role="tablist" aria-label="Sections">
                        {TABS.map((t) => (
                            <button
                                key={t.id}
                                type="button"
                                role="tab"
                                id={`tab-${t.id}`}
                                className="tab"
                                aria-selected={tab === t.id}
                                aria-controls="panel"
                                onClick={() => setTab(t.id)}
                            >
                                {t.label}
                            </button>
                        ))}
                    </div>
                </nav>

                <section key={tab} id="panel" className="panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
                    <Panel onNavigate={setTab} />
                </section>

                <footer className="statusbar">
                    {CONTACTS.map((c) => (
                        <a key={c.id} href={c.href} target={c.id === "email" ? undefined : "_blank"} rel="noreferrer">
                            {c.value}
                        </a>
                    ))}
                </footer>
            </main>
        </div>
    );
}
