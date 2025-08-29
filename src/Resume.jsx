export default function Resume()
{
    return (
        <section id="resume" className="container" style={{ padding: "4rem 0" }}>
            <h2 style={{ marginTop: "1rem" }}>Resume</h2>

            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: 0,
                    paddingBottom: "100%",
                    maxWidth: "900px",
                    margin: "0 auto",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    overflow: "hidden"
                }}
            >
                <iframe
                    src="/assets/resume.pdf#view=FitH"
                    title="Richard Guo – Resume"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                />
            </div>

            <p style={{ textAlign: "center", marginTop: "1rem" }}>
                <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
                    open it in a new tab
                </a>{" "}
                |{" "}
                <a href="/assets/resume.pdf" download>
                    download it
                </a>
            </p>
        </section>
    );
}
