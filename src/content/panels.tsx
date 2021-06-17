import { PanelContent } from "../components/PanelContent";
import * as React from "react";
import { Link, Paragraph, Span } from "../components/Typography";
import { List } from "../components/List";
import {
    DegreeAuditProject,
    FokusProject,
    IRChatProject,
    PortfolioProject, RCVProject, RoleAssigner, SDQRProject,
    ShareCalcProject,
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
        and lately I've also been branching into cybersecurity.
    </Paragraph>
    <Span>
        <Link href="https://github.com/jmoore34">GitHub</Link><span> - </span>
        <Link href="https://www.linkedin.com/in/jonathan-t-moore/">LinkedIn</Link><span> - </span>
        <Link href="https://app.codesignal.com/profile/jonathan_moore">CodeSignal</Link>
    </Span>
</PanelContent>;

export const EducationPanel = () => <PanelContent title="Education" subtitle="Overview">
    <List items={[
        "The Georgia Institute of Technology",
        "M.S. Computer Science, Expected Summer 2023"
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
        "Information Security"
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
        "Kotlin",
        "C",
        "C#",
        "Java",
        "C++",
        "SQL",
        "Python",
        "Typescript",
        "ES10 Javascript",
        "Lisp",
        "Bash",
        "PHP"
    ]} />
</PanelContent>;

export const FrameworksPanel = () => <PanelContent title="Skills" subtitle="Frameworks">
    <Paragraph>Web</Paragraph>
    <List items={[
        "React",
        "styled-components",
        "Material UI",
        "Sass",
        "Semantic UI"
    ]} />
    <Paragraph>Mobile</Paragraph>
    <List items={[
        "Android (Java)",
        "React Native"
    ]} />

    <Paragraph>Backend</Paragraph>
    <List items={[
        "Flask",
        "Exposed (Kotlin ORM)",
        "ktor (Kotlin web server)",
        "MySQL",
        "PostgreSQL"
    ]} />
</PanelContent>;

export const MiscSkillsPanel = () => <PanelContent title="Skills" subtitle="Tools">
    <Paragraph>Software Development</Paragraph>
    <List items={[
        "Git (command-line, SourceTree)",
        "Jira",
        "Unit testing (Jest, JUnit 5, ktor)",
        "Docker",
        "Linux + Bash",
        "Vim and Emacs",
        "IntelliJ, WebStorm, Android Studio, VS Code, etc."
    ]} />

    <Paragraph>Cybersecurity Research</Paragraph>
    <List items={[
        "Binary Analysis Platform (Primus symbolic microexecutor)",
        "Custom Clang tool development (libtooling)",
        "Ghidra",
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
    <Paragraph>Click on an item to expand more details.</Paragraph>
    <List items={[
        { title: "Role Assigner (Spring-Summer 2021)", body: <RoleAssigner /> },
        { title: "Degree Audit Tool (Fall 2020)", body: <DegreeAuditProject /> },
        { title: "Self-Documenting Quine Relay (Summer 2020)", body: <SDQRProject /> },
        { title: "Portfolio Website (Fall 2019)", body: <PortfolioProject /> },
        { title: "ShareCalc (Fall 2019)", body: <ShareCalcProject /> },
        { title: "Fokus (Spring 2019)", body: <FokusProject /> },
        { title: "Web Tuner (Spring 2019)", body: <TunerProject /> },
        { title: "IR Chat (Fall 2018)", body: <IRChatProject /> },
    ]} />
</PanelContent>;

export const WorkPanel = () => <PanelContent title="Other experience">

    <Paragraph>Workplace experience (click to expand)</Paragraph>
    <List items={[
        {
            title: "Software Development Intern (Summer 2021 / Ongoing)", body: <>
                <Paragraph>Tyler Technologies, Plano, TX</Paragraph>
                <Paragraph>Refactor legacy Silverlight code to WPF using Agile (with Jira) in 2-week sprints.</Paragraph>
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
        "Cellist, Musica Nova (Spring 2019-Fall 2020)",
        "Freshman Mentor, Freshman Mentor Program (Fall 2018-Spring 2021)",
        //"President, Animal Rights Club (Fall 2018-present)",
        "Webmaster, Engineer in Residence [EiR] (Spring 2018-Spring 2020)",
    ]}
    />
</PanelContent>;
