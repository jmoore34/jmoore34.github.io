import { PanelContent } from "../components/PanelContent";
import * as React from "react";
import { Link, Paragraph, Span } from "../components/Typography";
import { List } from "../components/List";
import {
    CPUProject,
    CubeClockProject,
    DegreeAuditProject,
    DiceBotProject,
    FokusProject,
    IRChatProject,
    PortfolioProject, RCVProject, RoleAssignerProject, SDQRProject,
    ShareCalcProject,
    StockMarketProject,
    ToborHerdingProject,
    TunerProject
} from "./projects";

export const StartPanel = () => <PanelContent title={"Jonathan Moore"} subtitle={"Portfolio"}>
    <Paragraph showOnlyWhenVertical color="red">
        Note: To best experience this site, rotate your screen from portrait to landscape.
    </Paragraph>
    <Paragraph>
        Use arrow keys or swipe gestures to navigate.
    </Paragraph>
</PanelContent>;

export const AboutMePanel = () => <PanelContent title={"About me"}>
    <Paragraph>
        I am a Software Engineer II at H-E-B and a Computer Science (<i>summa cum laude</i>) graduate from the University of Texas at Dallas.
        I love functional programming, whether it be writing Haskell at my job, tinkering with Rust in my free time, or using FP-inspired frameworks like React and Solid in my website commissions. I also have a background in cybersecurity research, with a particular interest in binary and network exploitation.
    </Paragraph>
    <Paragraph>
        In my free time, I love playing cello in a small ensemble, rock climbing, and hiking.
    </Paragraph>
    <Paragraph>
        <Link href="https://github.com/jmoore34">GitHub</Link>
        {/* <Link href="https://www.linkedin.com/in/jonathan-t-moore/">LinkedIn</Link> */}
        {/* <span> - </span> */}
        {/* <Link href="https://app.codesignal.com/profile/jonathan_moore">CodeSignal</Link> */}
    </Paragraph>
</PanelContent>;

export const EducationPanel = () => <PanelContent title="Education" subtitle="Overview">
    {/* <List items={[
        "The Georgia Institute of Technology",
        "M.S. Computer Science (in progress)"
    ]} />
    <Paragraph /> */}
    <List items={[
        "The University of Texas at Dallas",
        "B.S. Computer Science, Awarded May 2021",
        "Summa Cum Laude",
        "GPA 3.972/4.0"
    ]} />
</PanelContent>;

export const CourseworkPanel = () => <PanelContent title="Education" subtitle="Coursework">
    <Paragraph>Graduate Coursework</Paragraph>
    <List items={[
        "Information Security",
        "Network Security",
        "Human-Computer Interaction"
    ]} />
    <Paragraph>Undergraduate Coursework</Paragraph>
    <List items={[
        "Advanced Data Structures & Algorithms",
        "Database Systems",
        "Computer Networks",
        "Automata Theory",
        "Digital Logic",
        "Software Engineering",
        "Cyber Attack and Defense Lab",
        "Operating System Design",
        "Computer Architecture",
        "C/C++ Programming in a Unix Environment",
        "Organization of Programming Languages",
        "Computer Graphics",
        "Senior Design",
        "Technical & Professional Communication"
    ]} />
</PanelContent>;

export const LanguagesPanel = () => <PanelContent title="Skills" subtitle="Languages">
    <List items={[
        "Haskell",
        "SQL (PostgreSQL)",
        "Rust",
        "Kotlin",
        "Typescript",
        "C#",
        "C++",
        "C",
        "Java",
        "Python",
        // "Lisp",
        // "Bash",
    ]} />
</PanelContent>;

export const FrameworksPanel = () => <PanelContent title="Skills" subtitle="Framework Experience">
    <Paragraph>Backend</Paragraph>
    <List items={[
        "Servant (Haskell) (as a SE I and SE II)",
        "ktor (Kotlin HTTP server) (2 projects)",
        "Axum (Rust HTTP server) (1 project)",
        "Discord-rs (Rust Discord API crate) (1 project)",
        "Flask (Python HTTP server) (1 project)",
    ]} />
    <Paragraph>Frontend</Paragraph>
    <List items={[
        "React/Preact (3 years / 8+ projects)", // not including CobraFuel
        "styled-components/goober (3 years / 7 projects)",
        "Material UI (2.5 years / 3 projects)",
        "WPF (C#) (internship)",
        "Sass (1 project)",
    ]} />

    <Paragraph>Mobile</Paragraph>
    <List items={[
        "Android (Java) (1 project)",
        "React Native (1 toy project)"
    ]} />



    <Paragraph>Other</Paragraph>
    <List items={[
        "Unity (1 project)"
    ]} />
</PanelContent>;

export const MiscSkillsPanel = () => <PanelContent title="Skills" subtitle="Development Tools">
    <Paragraph>Software Development</Paragraph>
    <List items={[
        "Git (command-line, SourceTree)",
        "Jira",
        "Unit testing (Jest, JUnit 5, kotest, Rus]t tests)",
        "Docker",
        "Linux, Bash, & Emacs",
        "IntelliJ, WebStorm, Android Studio, VS Code, etc."
    ]} />

    <Paragraph>Cybersecurity Research</Paragraph>
    <List items={[
        "Binary Analysis Platform (Primus symbolic microexecutor)",
        "Custom Clang tool development (libtooling)",
        "Ghidra",
        "Cutter",
        "GDB (pwndbg)",
        "AddressSanitizer, UBSan, etc.",
    ]} />

    <Paragraph>Document Editing</Paragraph>
    <List items={[
        "LaTeX",
        "MS Office"
    ]} />
</PanelContent>;


export const ProjectsPanel = () => <PanelContent title="Projects" forceScrollbar> {/*// force scrollbar appearance to prevent scrollbar-based jitter during animations*/}
    <Paragraph>Here are some of my featured publicly-available projects. Click on an item to expand more details.</Paragraph>
    <List items={[
        { title: "Dice Bot", subtitle: "(Rust)", body: <DiceBotProject /> },
        { title: "Tobor Herding Game", subtitle: "(C#/Unity)", body: <ToborHerdingProject /> },
        { title: "Cube Clock", subtitle: "(TypeScript/React)", body: <CubeClockProject /> },
        { title: "Role Assigner", subtitle: "(TypeScript/React, Kotlin/Ktor)", body: <RoleAssignerProject /> },
        { title: "Degree Audit Tool", subtitle: "(TypeScript/React, Python/Flask)", body: <DegreeAuditProject /> },
        { title: "Self-Documenting Quine Relay", subtitle: "(Kotlin et al.)", body: <SDQRProject /> },
        { title: "Stock Market Database", subtitle: "(MySQL, Java)", body: <StockMarketProject /> },
        { title: "Portfolio Website", subtitle: "(TypeScript/React)", body: <PortfolioProject /> },
        { title: "ShareCalc", subtitle: "(Java/Android)", body: <ShareCalcProject /> },
        { title: "Fokus", subtitle: "(Electron, TypeScript/React)", body: <FokusProject /> },
        { title: "Web Tuner", subtitle: "(TypeScript/React)", body: <TunerProject /> },
        { title: "IR Chat", subtitle: "(C#/WinForms, Embedded C++)", body: <IRChatProject /> },
        { title: "4-bit CPU", subtitle: "(Schematic)", body: <CPUProject /> },
    ]} />
</PanelContent>;

export const WorkPanel = () => <PanelContent title="Work experience">

    <Paragraph>Workplace experience (click on an item to expand)</Paragraph>
    <List items={[
        {
            title: "Software Engineer II (November 2023 - Present)", body: <>
                <Paragraph>H-E-B, San Antonio, TX (Remote)</Paragraph>
                <Paragraph>As a Haskell backend engineer, I rewrote one of our least performant queries to cut its completion time from over a day to under 8 minutes (a 12,000x performance increase). I also modified our message storage infrastructure to automatically clean up after itself, safely deleting over 100 million stale records in its pilot, to permanently boost the performance of historical queries.</Paragraph>
            </>
        },
        {
            title: "Software Engineer II (October 2022 - November 2023)", body: <>
                <Paragraph>H-E-B, San Antonio, TX (Remote)</Paragraph>
                <Paragraph>Pairing with a staff engineer, I created a major redesign to our database schema that would reduce data anomalies and allow for efficient point-in-time historical queries of data that was previously very expensive to query historically. I also improved the clarity of all our SQL queries by integrating a quasiquoter into our Haskell codebase. With an eye for detail, I caught sneaky yet important bugs in code review. Twice, I caught sneaky edge cases with our team's planned redesign, which I presented to the team with data analysis and pros and cons of multiple solutions.</Paragraph>
            </>
        },
        {
            title: "Research Assistant (Spring 2020 - Winter 2020)", body: <>
                <Paragraph>The University of Texas at Dallas, Richardson, TX (Dr. Shiyi Wei's Lab)</Paragraph>
                <Paragraph>
                    Worked on a team of PhD students creating a framework to evaluate fuzz testers via artificial bug
                    injection. I read papers, designed and ran experiments (e.g. with ASAN), developed key parts of the toolchain
                    (such as a custom Clang compiler plugin to rewrite source code and a custom Primus Lisp plugin for
                    the Binary Analysis Platform microexecutor), and help writed the paper we submitted to the 2020 IEEE S&P conference.
                </Paragraph>
            </>
        },
        {
            title: "Orientation Leader (Spring 2018-Summer 2019)", body: <>
                <Paragraph>The University of Texas at Dallas, Richardson, TX</Paragraph>
                <Paragraph>
                    Lead tours, small groups, and academic advising. Handled confidential student records. CPR, LGBT+,
                    Title IX, multicultural, and disability trained. Abundant interpersonal communication, leadership,
                    and teamwork. Acted as Campus Security Authority (CSA). As a returner, mentored new OLs.
                    <b> Awarded Returning Orientation Leader of the Year.</b>
                </Paragraph></>
        }
    ]} />
    {/* <Paragraph>Extracurriculars</Paragraph>
    <List items={[
        "Freshman Mentor, Freshman Mentor Program (Fall 2018-Spring 2021)",
        "Cellist, Musica Nova (Spring 2019-Fall 2020)",
        "Webmaster, Engineer in Residence [EiR] (Spring 2018-Spring 2020)",
    ]}
    /> */}
</PanelContent>;
