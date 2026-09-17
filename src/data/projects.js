import recallImage from "../assets/project/rlogo.png";
import wordleImage from "../assets/project/wordlesolver.png";
import proteinImage from "../assets/project/proteinpilot.png";
import camelUpImage from "../assets/project/difcamelup.png";

// Filters shown above the project list. Each project lists the filter ids it belongs to.
export const FILTERS = [
    { id: "all", label: "All" },
    { id: "ai", label: "AI / ML" },
    { id: "games", label: "Games" },
    { id: "web", label: "Web" },
];

// To add a project, add an entry here. `image` and `live` are optional.
export const PROJECTS = [
    {
        id: "presnap",
        name: "PreSnap",
        status: "Live",
        tags: ["ai"],
        image: null,
        summary: "NFL win probability, before every snap.",
        description:
            "Estimates each team's chance of winning at any moment of an NFL game using only what's known before the ball is snapped: score, time left, down, field position and the betting line. Never what the play actually did.",
        specs: [
            ["Type", "Win probability model"],
            ["Stack", "Python / Polars / Postgres / scikit-learn / Streamlit"],
            ["Data", "605,941 plays, 2010–2024"],
            ["Brier", "0.151 on unseen 2023–24 games"],
        ],
        live: "https://presnap.streamlit.app/",
        source: "https://github.com/RichardGuo24/presnap",
    },
    {
        id: "recall",
        name: "Recall",
        status: "Live",
        tags: ["ai", "web"],
        image: recallImage,
        summary: "AI voice receptionist for small businesses.",
        description:
            "Answers calls, checks Google Calendar availability, books appointments and places reminder calls, around the clock. The demo plays the receptionist of a small law office.",
        specs: [
            ["Type", "AI voice agent"],
            ["Backend", "Python / LiveKit / OpenAI / Supabase"],
            ["Frontend", "Next.js / TypeScript"],
        ],
        live: "https://recall-fe-xi.vercel.app/",
        source: "https://github.com/RichardGuo24/Recall-Combined",
    },
    {
        id: "wordle",
        name: "Wordle AI Solver",
        status: "Live",
        tags: ["ai", "games", "web"],
        image: wordleImage,
        summary: "Solves Wordle systematically, with a bot to practice against.",
        description:
            "Wordle is simple until you run into a word like PARER. This solves it systematically and gives you a space for high-pressure practice against a bot.",
        specs: [
            ["Type", "Solver + practice bot"],
            ["Stack", "Python / Flask / React"],
        ],
        live: "https://wordlepractice.vercel.app/",
        source: "https://github.com/RichardGuo24/WordleBotPractice",
    },
    {
        id: "protein-pilot",
        name: "Protein Pilot",
        status: "Live",
        tags: ["ai", "web"],
        image: proteinImage,
        summary: "AI high-protein recipes from what you have on hand.",
        description:
            "Pick a protein and list your ingredients, and it generates a high-protein recipe with an estimated protein count. Supports 17+ protein sources.",
        specs: [
            ["Type", "AI recipe generator"],
            ["Stack", "React / Vite / Node.js / Claude API / Vercel"],
        ],
        live: "https://proteinpilot.vercel.app/",
        source: "https://github.com/RichardGuo24/ProteinPilot",
    },
    {
        id: "camel-up",
        name: "Camel Up EV Calc",
        status: "Src",
        tags: ["games"],
        image: camelUpImage,
        summary: "Probability engine for the board game Camel Up.",
        description:
            "A Python version of the board game Camel Up with probability analysis: exact odds from enumerating every possible dice sequence, plus Monte Carlo simulation estimates.",
        specs: [
            ["Type", "Probability engine"],
            ["Stack", "Python"],
        ],
        live: null,
        source: "https://github.com/RichardGuo24/Camel-Up-AI",
    },
];
