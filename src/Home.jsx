// src/Home.jsx
import { useEffect } from "react"
import linkedinIcon from './assets/linkedin-icon.svg';
import githubIcon from './assets/github-icon.svg';
import squarepfp from './assets/squarepfp.png'
import SplitText from "./SplitText";


const handleAnimationComplete = () =>
{
    console.log('All letters have animated!');
};


export default function Home()
{

    return (
        <>
            <div id="hero">
                {/* Navbar */}
                <section className="header-container">
                    <img className="profile-image" src={squarepfp} alt="Profile" />
                    <h1>Hi I&apos;m Richard Guo</h1>
                    <SplitText
                        text={`Exploring AI,\nEngineering "Fun" Applications`}
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        tag="p"
                        style={{ fontSize: "3rem", fontWeight: "bold", color: "black", whiteSpace: "pre-line", display: "block" }}
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                    <div className="content-text">
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
                    <a className="card" href="https://recall-fe-xi.vercel.app/" target="_blank" rel="noreferrer">
                        <div className="project-info">
                            <div className="project-bio">
                                <h3>Recall (AI Receptionist)</h3>
                                <p>Python</p>
                            </div>
                            <div className="project-link">
                                <a href="https://github.com/RichardGuo24/Recall-Combined" target="_blank" rel="noreferrer"><i className="fab fa-github" /></a>
                                <a href="https://recall-fe-xi.vercel.app/" target="_blank" rel="noreferrer"><i className="fas fa-globe" /></a>
                                {/*<a href="#" target="_blank" rel="noreferrer"><i className="fas fa-globe" /></a>*/}
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

                    {/* Project 4 */}
                    <div className="card" href="https://github.com/RichardGuo24/Camel-Up-AI" target="_blank" rel="noreferrer">
                        <div className="project-info">
                            <div className="project-bio">
                                <h3>Camel Up EV Calculator</h3>
                                <p>Python</p>
                            </div>
                            <div className="project-link">
                                <a href="https://github.com/RichardGuo24/Camel-Up-AI" target="_blank" rel="noreferrer"><i className="fab fa-github" /></a>
                                {/*<a href="#" target="_blank" rel="noreferrer"><i className="fas fa-globe" /></a>*/}
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
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/RichardGuo24" target="_blank" rel="noreferrer">
                            <img src={githubIcon} alt="GitHub" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
