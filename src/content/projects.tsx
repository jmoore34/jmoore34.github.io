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

export const STVProject = () => <Project
    type="Personal project"
    tools="Python, Django, Graphene/GraphQL, SQLite, React"
    overview="Full-stack voting application designed to democratize online voting via the Single Transferable Vote (STV) system."
    github="https://github.com/charJe/single-transferable"
/>;
