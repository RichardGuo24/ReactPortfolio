import { RESUME_URL } from "../data/profile.js";

export default function Resume()
{
    return (
        <div className="resume">
            <div className="actions">
                <a className="btn" href={RESUME_URL} target="_blank" rel="noreferrer">Open resume</a>
                <a className="btn btn-dim" href={RESUME_URL} download="Richard-Guo-Resume.pdf">Download PDF</a>
            </div>
            <div className="resume-viewer">
                <iframe src={`${RESUME_URL}#toolbar=0&navpanes=0&view=FitH`} title="Richard Guo resume" />
            </div>
        </div>
    );
}
