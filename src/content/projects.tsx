import {Project} from "../components/Project";
import React, { Fragment } from 'react';
import {Link} from "../components/Typography";

export const PortfolioProject = () => <Project
    type="Personal project"
    tools="3D CSS Transforms, React, styled-components"
    overview={<>
        After seeing various <Link href="https://codepen.io/dogagenc/pen/xbRKZx">CodePens</Link> and
        <Link href="https://3dtransforms.desandro.com/cube"> articles</Link> I was inspired to create my own 3D
        landscape with React and CSS transforms.
    </>}
    github="https://github.com/jmoore34/jmoore34.github.io"
/>;

export const IRChatProject = () => <Project
    type="Personal project"
    tools="Embedded C++, C#, WinForms"
    overview="Designed hardware and software to allow two offline computers to send and receive data simultaneously
    via infrared beams. Used embedded C++ for the microcontroller and C# for the desktop client and GUI."
    github="https://github.com/jmoore34/ir-chat"
/>;

export const FokusProject = () => <Project
    type="Personal project"
    tools="React, Electron, pair programming"
    overview="Designed, wrote, and maintained a unique desktop productivity app. Addressed the problem of ineffective task management tools by creating a system that strictly enforced user-set time usage goals and prevented tampering or exiting."
    github="https://github.com/jmoore34/fokus"
/>;

export const TunerProject = () => <Project
    type="Personal project"
    tools="React, WebAudio API, Semantic UI"
    overview="Progressive Web App (PWA) that addressed the problem of inadequate tuner apps for musicians.
    Unique features like playing multiple octaves concurrently."
    github="https://github.com/jmoore34/tuner"
    live="https://jmoore34.github.io/tuner/"
/>;


export const ShareCalcProject = () => <Project
    type="Class project"
    tools="Android/Java, JUnit 5, UML/Object-Oriented Design"
    overview="Formally planned scientific, unit, and programmer calculator app for Android with emphasis on sharing calculations with others. Formalized requirements, sequence diagrams, and class diagrams.  Handwrote a lexer and bottom-up parser, object-oriented evaluation engine, and 92 JUnit tests to allow for computation of arbitrarily complex scientific and bitwise expressions. Acted as team project manager, conducting code reviews, setting deadlines, and approving PRs."
    github="https://github.com/MayaIsla/3354-Team-Moc"
/>;

export const SDQRProject = () => <Project
    type="Personal project"
    tools="Kotlin, Unit Testing (kotest); C, C++, C#, Lisp, Python"
    overview="A Python program that outputs a C program that outputs a C++ program that outputs a C# program that outputs a Lisp program that outputs the exact original Python program. Each program in the cycle works independently and runs without any input, network, or disk reads. Moreover, each program in the cycle prints colored documentation about how to compile the next program in the cycle."
    github="https://github.com/jmoore34/quine-relay"
    live="https://bit.ly/quinerelay"
/>;

export const RCVProject = () => <Project
    type="Personal project"
    tools="Kotlin (ktor, Exposed), PostgreSQL, React, Typescript"
    overview="A full-stack Strawpoll-like voting application that implements Ranked Choice Voting. Custom-built REST API built with Ktor, PostgreSQL database, and React frontend. "
    github=""
/>

export const DegreeAuditProject = () => <Project
    type="Senior design project"
    tools="React, Flask"
    overview="Full-stack React application reimagining how students plan and share their degree plans, greatly increasing advising efficiency. Students click on classes in a degree flowchart to assign color-coded semesters and then can export their degree plan as an image. Includes drag-and-drop SHA-256 password-authenticated flowchart editor for advisors using custom REST API."
    github="https://github.com/jmoore34/degreeaudit"
/>

export const RoleAssignerProject = () => <Project
    type="Personal project"
    tools="React, ktor (Kotlin HTTP server)"
    overview="Full-stack React application allowing for anonymized role assignment using custom WebSocket server. Features live, Google Docs-like collaboration, input debouncing, material design, and a custom API."
    github="https://github.com/jmoore34/roleassigner"
    live="https://jmoore34.github.io/RoleAssigner/"
/>

export const CubeClockProject = () => <Project
    type="Personal mini-project"
    tools="React, Typescript, SVG, styled-components"
    overview={
        <Fragment>
            Hue-shifted animated clock PWA featuring SVG cubes written from scratch.
        </Fragment>
    }
    github="https://github.com/jmoore34/cubeclock"
    live="https://jmoore34.github.io/cubeclock/"
    footnote={
        <Fragment>
            <i style={{color: "blue"}}>Note: </i>
            For a related mini-project of mine, see <Link href="https://jmoore34.github.io/binaryclock/">Binary Clock</Link> <Link href="https://github.com/jmoore34/binaryclock" >(Repo)</Link>
        </Fragment>
    }
/>

export const ToborHerdingProject = () => <Project
    type="Class project"
    tools="Unity"
    overview="3rd-person 3D game. Did most of the coding, including movement, camera rigging, AI behavior, game logic, and menus."
    github="https://github.com/jmoore34/ToborHerding-Unity"
    live="https://jmoore34.github.io/ToborHerding-WebGL/"
/>

export const DiceBotProject = () => <Project
    type="Personal project"
    tools="Rust, Discord Bot API"
    overview='A Rust-based Discord bot with a hand-written dice expression parser (e.g. parsing "4d6r1k3*6"). Configured GitHub Actions to automatically build and release Windows, Linux, and MacOS binaries.'
    github="https://github.com/jmoore34/dicebot/"
/>

export const CPUProject = () => <Project
    type="Class project"
    tools="LogicWorks schematic software"
    overview="A 4-bit CPU supporting addition, subtraction, comparison, XOR, AND, OR, and NOT instructions. Loading of instruction, operand 1, operand 2, and result registers is synchronized via a 3-bit timer which feeds into a decoder. "
    footnote={<Link href="cpu.png">View Schematic</Link>}
/>

export const StockMarketProject = () => <Project
    type="Class project"
    tools="MySQL, Java"
    overview="Design documents (ER diagram, schema diagram) and SQL for a stock market database. The database was programmatically populated with data via a Java-based simulation."
    github="https://github.com/jmoore34/stockmarket"
/>