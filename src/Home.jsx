// src/Home.jsx
import { useEffect } from "react"


export default function Home()
{

    return (
        <>
            <div id="hero">
                {/* Navbar */}
                <section className="header-container">
                    <img className="profile-image" src="/assets/squarepfp.png" alt="Profile" />
                    <h1>Hi I&apos;m Richard Guo</h1>

                    <div className="content-text">
                        <h2>Exploring AI,</h2>
                        <h2>Engineering &quot;Fun&quot; Applications</h2>
                        <p>
                            A computer science student @ Columbia currently working on understanding
                            neural network and full stack development
                        </p>
                    </div>
                    <a href="#footer" className="btn btn-secondary">Connect With Me</a>
                </section>
            </div>

            {/* Projects */}
            <section id="projects" className="project-container container">
                <div className="division" />
                <div className="content-text">
                    <h2>Projects</h2>
                    <p>Check out some of my projects!</p>
                </div>

                <article className="project">
                    {/* Project 1 */}
                    <a className="card" href="https://proteinpilot.vercel.app/" target="_blank" rel="noreferrer">
                        <div className="project-info">
                            <div className="project-bio">
                                <h3>Protein Pilot</h3>
                                <p>React, Node.js, Vercel</p>
                            </div>
                            <div className="project-link">
                                <a href="https://github.com/RichardGuo24/ProteinPilot" target="_blank" rel="noreferrer"><i className="fab fa-github" /></a>
                                <a href="https://proteinpilot.vercel.app/" target="_blank" rel="noreferrer"><i className="fas fa-globe" /></a>
                            </div>
                        </div>
                    </a>

                    {/* Project 2 */}
                    <a className="card" href="https://wordlepractice.vercel.app/" target="_blank" rel="noreferrer">
                        <div className="project-info">
                            <div className="project-bio">
                                <h3>Wordle AI Solver</h3>
                                <p>Python, Flask, React</p>
                            </div>
                            <div className="project-link">
                                <a href="https://github.com/RichardGuo24/WordleBotPractice" target="_blank" rel="noreferrer"><i className="fab fa-github" /></a>
                                <a href="https://wordlepractice.vercel.app/" target="_blank" rel="noreferrer"><i className="fas fa-globe" /></a>
                            </div>
                        </div>
                    </a>

                    {/* Project 3 */}
                    <div className="card">
                        <div className="project-info">
                            <div className="project-bio">
                                <h3>Camel Up EV Calculator</h3>
                                <p>Python</p>
                            </div>
                            <div className="project-link">
                                <a href="https://github.com/RichardGuo24/Camel-Up-AI" target="_blank" rel="noreferrer"><i className="fab fa-github" /></a>
                                <a href="#" target="_blank" rel="noreferrer"><i className="fas fa-globe" /></a>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            <footer id="footer">
                <div className="container">
                    <h1>Contacts</h1>
                    <a href="mailto:rwg2125@columbia.edu">rwg2125@columbia.edu</a>
                    {/* Social Links */}
                    <div className="social">
                        <a href="https://linkedin.com/in/richardguo24" target="_blank" rel="noreferrer">
                            <img src="/assets/linkedin-icon.svg" alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/RichardGuo24" target="_blank" rel="noreferrer">
                            <img src="/assets/github-icon.svg" alt="GitHub" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
