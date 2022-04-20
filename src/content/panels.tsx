import { PanelContent } from "../components/PanelContent";
import * as React from "react";
import { Link, Paragraph, Span } from "../components/Typography";
import { List } from "../components/List";
import {
    CubeClockProject,
    DegreeAuditProject,
    DiceBotProject,
    FokusProject,
    IRChatProject,
    PortfolioProject, RCVProject, RoleAssignerProject, SDQRProject,
    ShareCalcProject,
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
        I am a Computer Science (<i>summa cum laude</i>) graduate from UT Dallas and grad student at Georgia Tech.
        I have a love for personal projects, from React-based websites like this one to embedded microcontroller code
        to algorithm design in functional programming languages.
        I also enjoy working on
        backend, full-stack, and mobile development,
        as well as cybersecurity research
        (especially binary and network exploitation).
    </Paragraph>
    <Span>
        <Link href="https://github.com/jmoore34">GitHub</Link><span> - </span>
        <Link href="https://www.linkedin.com/in/jonathan-t-moore/">LinkedIn</Link><span> - </span>
        {/* <Link href="https://app.codesignal.com/profile/jonathan_moore">CodeSignal</Link> */}
    </Span>
</PanelContent>;

export const EducationPanel = () => <PanelContent title="Education" subtitle="Overview">
    <List items={[
        "The Georgia Institute of Technology",
        "M.S. Computer Science (in progress)"
    ]} />
    <Paragraph />
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
        "Human-Computer Interaction (ongoing)"
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
        "Rust",
        "Kotlin",
        "Typescript & Javascript",
        "C#",
        "C++",
        "C",
        "Java",
        "SQL",
        "Python",
        // "Lisp",
        // "Bash",
    ]} />
</PanelContent>;

export const FrameworksPanel = () => <PanelContent title="Skills" subtitle="Frameworks">
    <Paragraph>Frontend</Paragraph>
    <List items={[
        "React/Preact (3 years / 9 projects)", // not including CobraFuel
        "styled-components/goober (3 years / 8 projects)",
        "Material UI (2.5 years / 3 projects)",
        "WPF (C#) (internship)",
        "Sass (1 project)",
    ]} />
    
    <Paragraph>Mobile</Paragraph>
    <List items={[
        "Android (Java) (1 project)",
        "React Native (1 toy project)"
    ]} />

    <Paragraph>Backend</Paragraph>
    <List items={[
        "ktor (Kotlin HTTP server) (2 projects)",
        "Rocket (Rust HTTP server) (1 project)",
        "Discord-rs (Rust Discord API crate) (1 project)",
        "Flask (Python HTTP server) (1 project)",
        "MySQL (1 project)",
    ]} />

    <Paragraph>Other</Paragraph>
    <List items={[
        "Unity (1 project)"
    ]} />
</PanelContent>;

export const MiscSkillsPanel = () => <PanelContent title="Skills" subtitle="Tools">
    <Paragraph>Software Development</Paragraph>
    <List items={[
        "Git (command-line, SourceTree)",
        "Jira",
        "Unit testing (Jest, JUnit 5, kotest, Rust tests)",
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
    <Paragraph>Here are my featured publicly-available projects. Click on an item to expand more details.</Paragraph>
    <List items={[
        { title: "Dice Bot (Winter 2021)", body: <DiceBotProject />},
        { title: "Tobor Herding Game (Spring 2021)", body: <ToborHerdingProject /> },
        { title: "Cube Clock (Fall 2021)", body: <CubeClockProject /> },
        { title: "Role Assigner (Spring-Summer 2021)", body: <RoleAssignerProject /> },
        { title: "Degree Audit Tool (Fall 2020)", body: <DegreeAuditProject /> },
        { title: "Self-Documenting Quine Relay (Summer 2020)", body: <SDQRProject /> },
        { title: "Portfolio Website (Fall 2019)", body: <PortfolioProject /> },
        { title: "ShareCalc (Fall 2019)", body: <ShareCalcProject /> },
        { title: "Fokus (Spring 2019)", body: <FokusProject /> },
        { title: "Web Tuner (Spring 2019)", body: <TunerProject /> },
        { title: "IR Chat (Fall 2018)", body: <IRChatProject /> },
    ]} />
</PanelContent>;

export const WorkPanel = () => <PanelContent title="Work experience">

    <Paragraph>Workplace experience (click on an item to expand)</Paragraph>
    <List items={[
        {
            title: "Software Development Intern (Summer 2021)", body: <>
                <Paragraph>Tyler Technologies, Plano, TX</Paragraph>
                <Paragraph>Performed a long-awaited refactor of legacy Silverlight code into cleaner,
                    more modern C# & WPF code with Material Design and MVVM architecture.
                    I worked in two-week sprints, using Jira to write test cases, write dev plans,
                    and open PRs.</Paragraph>
            </>
        },
        {
            title: "Research Assistant (Spring 2020-Winter 2020)", body: <>
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
    <Paragraph>Extracurriculars</Paragraph>
    <List items={[
        "Freshman Mentor, Freshman Mentor Program (Fall 2018-Spring 2021)",
        "Cellist, Musica Nova (Spring 2019-Fall 2020)",
        //"President, Animal Rights Club (Fall 2018-present)",
        "Webmaster, Engineer in Residence [EiR] (Spring 2018-Spring 2020)",
    ]}
    />
</PanelContent>;
