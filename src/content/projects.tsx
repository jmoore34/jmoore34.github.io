import {Project} from "../components/Project";
import React from 'react';
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
    overview="Formally planned scientific, unit, and programmer calculator app with emphasis on sharing calculations
    with others. Wrote a top-down parser, evaluation engine, and 92 unit tests to allow for computation of arbitrarily
    complex scientific & bitwise expressions. Acted as team project manager, conducting code reviews, setting deadlines,
    and approving pull requests."
    github="https://github.com/MayaIsla/3354-Team-Moc"
/>;

export const SDQRProject = () => <Project
    type="Personal project"
    tools="Kotlin, Unit Testing (kotest)"
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

export const RoleAssigner = () => <Project
    type="Personal project"
    tools="React, ktor, Exposed"
    overview="Full-stack React application allowing for anonymized role assignment using custom WebSocket server. Features live, Google Docs-like collaboration, input debouncing, material design, and a custom API."
    github="https://github.com/jmoore34/roleassigner"
    live="https://jmoore34.github.io/RoleAssigner/"
/>

export const CubeClock = () => <Project
    type="Personal mini-project"
    tools="React, Typescript, SVG, styled-components"
    overview="Hue-shifted animated clock PWA featuring SVG cubes written from scratch."
    github="https://github.com/jmoore34/cubeclock"
    live="https://jmoore34.github.io/cubeclock/"
/>