import portrait from "../assets/squarepfp.png";

const STATS = [
    ["Name", "Richard Guo"],
    ["School", "Columbia University"],
    ["Major", "Computer Science"],
    ["Focus", "Neural networks / Full stack"],
];

export default function Profile({ onNavigate })
{
    return (
        <div className="profile">
            <div className="tint profile-image">
                <img src={portrait} alt="Richard Guo" />
            </div>

            <div className="profile-body">
                <dl className="specs">
                    {STATS.map(([label, value]) => (
                        <div key={label}>
                            <dt>{label}</dt>
                            <dd>{value}</dd>
                        </div>
                    ))}
                </dl>

                <p className="readable">
                    A computer science student at Columbia, currently working on understanding
                    neural networks and full stack development.
                </p>

                <div className="actions">
                    <button type="button" className="btn" onClick={() => onNavigate("projects")}>View projects</button>
                    <button type="button" className="btn btn-dim" onClick={() => onNavigate("comms")}>Open comms</button>
                </div>
            </div>
        </div>
    );
}
