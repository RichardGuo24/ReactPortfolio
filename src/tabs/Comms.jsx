import { CONTACTS } from "../data/profile.js";

export default function Comms()
{
    return (
        <ul className="comms">
            {CONTACTS.map((c) => (
                <li key={c.id} className="comms-row">
                    <span className="dim">{c.label}</span>
                    <span className="comms-value">{c.value}</span>
                    <a
                        className="btn"
                        href={c.href}
                        target={c.id === "email" ? undefined : "_blank"}
                        rel="noreferrer"
                        aria-label={`${c.action}: ${c.label}`}
                    >
                        {c.action}
                    </a>
                </li>
            ))}
        </ul>
    );
}
