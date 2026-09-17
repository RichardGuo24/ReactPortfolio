import { useEffect, useRef, useState } from "react";
import { FILTERS, PROJECTS } from "../data/projects.js";
import { isTypingTarget } from "../keys.js";

export default function Projects()
{
    const [filter, setFilter] = useState("all");
    const [selectedId, setSelectedId] = useState(PROJECTS[0].id);
    const detailRef = useRef(null);

    const visible = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(filter));
    const selected = visible.find((p) => p.id === selectedId) ?? visible[0];

    const select = (id) =>
    {
        setSelectedId(id);
        // On the stacked phone layout the details sit below the list
        if (window.matchMedia("(max-width: 900px)").matches)
        {
            detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    // Up / down arrows move through the list, Enter launches the selected project
    useEffect(() =>
    {
        const onKeyDown = (e) =>
        {
            if (e.altKey || e.ctrlKey || e.metaKey || isTypingTarget(e.target)) return;
            if (e.key === "ArrowUp" || e.key === "ArrowDown")
            {
                e.preventDefault();
                const index = visible.indexOf(selected);
                const step = e.key === "ArrowDown" ? 1 : -1;
                setSelectedId(visible[(index + step + visible.length) % visible.length].id);
            } else if (e.key === "Enter" && !e.target.closest("a, button"))
            {
                window.open(selected.live ?? selected.source, "_blank", "noreferrer");
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [visible, selected]);

    return (
        <div className="projects-tab">
            <div className="filters" role="group" aria-label="Filter projects">
                {FILTERS.map((f) => (
                    <button
                        key={f.id}
                        type="button"
                        className="filter"
                        aria-pressed={filter === f.id}
                        onClick={() => setFilter(f.id)}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            <div className="projects">
                <div className="projects-side">
                    <ul className="project-list">
                        {visible.map((p) => (
                            <li key={p.id}>
                                <button
                                    type="button"
                                    className="project-item"
                                    aria-current={p.id === selected.id}
                                    onClick={() => select(p.id)}
                                >
                                    <span>{p.name}</span>
                                    <span className="project-status">{p.status}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                    <p className="dim side-note">
                        &gt; Exploring AI, engineering &ldquo;fun&rdquo; applications.
                    </p>
                </div>

                <article className="detail" ref={detailRef}>
                    {selected.image ? (
                        <div className="tint detail-image">
                            <img src={selected.image} alt={`${selected.name} screenshot`} />
                        </div>
                    ) : (
                        <div className="tint detail-image no-signal" aria-hidden="true">
                            <span>No signal</span>
                        </div>
                    )}

                    <div className="detail-head">
                        <h2>{selected.name}</h2>
                        <p>{selected.summary}</p>
                    </div>

                    <dl className="specs">
                        {selected.specs.map(([label, value]) => (
                            <div key={label}>
                                <dt>{label}</dt>
                                <dd>{value}</dd>
                            </div>
                        ))}
                        <div>
                            <dt>Status</dt>
                            <dd>{selected.live ? "Deployed" : "Source only"}</dd>
                        </div>
                    </dl>

                    <p className="readable detail-desc">{selected.description}</p>

                    <div className="actions">
                        {selected.live && (
                            <a className="btn" href={selected.live} target="_blank" rel="noreferrer">Launch demo</a>
                        )}
                        <a className="btn btn-dim" href={selected.source} target="_blank" rel="noreferrer">View source</a>
                    </div>
                </article>
            </div>
        </div>
    );
}
