import {PanelContent} from "../components/PanelContent";
import * as React from "react";
import {Link, Paragraph, Span} from "../components/Typography";
import {List} from "../components/List";
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
        I am a Fast Track senior in Computer Science at UT Dallas.
        I have a love for personal projects, from React-based websites like this one to embedded microcontroller code
        to algorithm design in functional programming languages.
        I also enjoy working on
        backend, full-stack, and mobile development,
        and lately I've been working more on developing my cybersecurity knowledge.
    </Paragraph>
    <Span>
        <Link href="https://github.com/jmoore34">GitHub</Link><span> - </span>
        <Link href="https://www.linkedin.com/in/jonathan-t-moore/">LinkedIn</Link><span> - </span>
        <Link href="https://app.codesignal.com/profile/jonathan_moore">CodeSignal</Link>
    </Span>
</PanelContent>;

export const EducationPanel = () => <PanelContent title="Education" subtitle="Overview">
    <List items={[
        "The University of Texas at Dallas",
        "B.S. Computer Science, Expected May 2021",
        "M.S. Computer Science (Fast Track), Expected November 2022",
        "Academic Excellence Scholarship, Honors Level",
        "GPA 3.969/4.0"
    ]}/>
</PanelContent>;

export const CourseworkPanel = () => <PanelContent title="Education" subtitle="Coursework">
    <List items={[
        "Advanced Data Structures & Algorithms",
        "Database Systems",
        "Computer Networks",
        "Automata Theory",
        "Digital Logic",
        "Software Engineering",
        "Operating System Design",
        "Computer Architecture",
        "C/C++ Programming in a Unix Environment",
        "Organization of Programming Languages",
        "Senior Design",
        "Technical & Professional Communication"
    ]}/>
</PanelContent>;

export const LanguagesPanel = () => <PanelContent title="Skills" subtitle="Languages">
    <List items={[
        "Kotlin",
        "C",
        "C#",
        "C++",
        "Python",
        "Typescript",
        "ES10 Javascript",
        "Java",
        "Lisp",
        "SQL",
        "Bash"
    ]}/>
</PanelContent>;

export const FrameworksPanel = () => <PanelContent title="Skills" subtitle="Frameworks">
    <Paragraph>Web</Paragraph>
    <List items={[
        "React",
        "styled-components",
        "Material UI",
        "Sass",
        "Semantic UI"
    ]}/>
    <Paragraph>Mobile</Paragraph>
    <List items={[
        "Android",
        "React Native"
    ]}/>

    <Paragraph>Backend</Paragraph>
    <List items={[
        "Flask",
        "Exposed (Kotlin ORM)",
        "ktor (Kotlin web server)",
        "MySQL",
        "PostgreSQL"
    ]}/>
</PanelContent>;

export const MiscSkillsPanel = () => <PanelContent title="Skills" subtitle="Tools">
    <Paragraph>Software Development</Paragraph>
    <List items={[
        "Git",
        "Unit testing (Jest, JUnit 5, ktor)",
        "Linux + Bash",
        "Docker",
        "Vim and Emacs",
        "IntelliJ, WebStorm, Android Studio, etc."
    ]}/>

    <Paragraph>Cybersecurity Research</Paragraph>
    <List items={[
        "Binary Analysis Platform (Primus symbolic microexecutor)",
        "Custom Clang tool development (libtooling)",
        "AddressSanitizer",
        "Ghidra",
        "GDB"
    ]}/>

    <Paragraph>Document Editing</Paragraph>
    <List items={[
        "LaTeX",
        "MS Office"
    ]}/>
</PanelContent>;


export const ProjectsPanel = () => <PanelContent title="Projects" forceScrollbar> {/*// force scrollbar appearance to prevent scrollbar-based jitter during animations*/}
    <Paragraph>Click on an item to expand more details.</Paragraph>
    <List items={[
        {title: "Role Assigner (Winter 2020)", body: <RoleAssigner />},
        {title: "Degree Audit Tool (Fall 2020)", body: <DegreeAuditProject />},
        {title: "Self-Documenting Quine Relay (Summer 2020)", body: <SDQRProject/>},
        {title: "Portfolio Website (Fall 2019)", body: <PortfolioProject/>},
        {title: "ShareCalc (Fall 2019)", body: <ShareCalcProject/>},
        {title: "Fokus (Spring 2019)", body: <FokusProject/>},
        {title: "Web Tuner (Spring 2019)", body: <TunerProject/>},
        {title: "IR Chat (Fall 2018)", body: <IRChatProject/>},
    ]}/>
</PanelContent>;

export const WorkPanel = () => <PanelContent title="Other experience">
    <Paragraph>Workplace experience (click to expand)</Paragraph>
    <List items={[
        {title: "Research Assistant (Spring 2020-Present)", body: <>
                <Paragraph>The University of Texas at Dallas, Richardson, TX (Dr. Shiyi Wei's Lab)</Paragraph>
                <Paragraph>
                    Working on a team of PhD students creating a framework to evaluate fuzz testers via artificial bug
                    injection. I read papers, design and run experiments (e.g. with ASAN), develop key parts of the toolchain
                    (such as a custom Clang compiler plugin to rewrite source code and a custom Primus Lisp plugin for
                    the Binary Analysis Platform microexecutor), and help write the paper.
                </Paragraph>
            </>},
        {title: "Orientation Leader (Spring 2018-Summer 2019)", body: <>
                <Paragraph>The University of Texas at Dallas, Richardson, TX</Paragraph>
                <Paragraph>
                Lead tours, small groups, and academic advising. Handled confidential student records. CPR, LGBT+,
                Title IX, multicultural, and disability trained. Abundant interpersonal communication, leadership,
                and teamwork. Acted as Campus Security Authority (CSA). As a returner, mentored new OLs.
                    <b> Awarded Returning Orientation Leader of the Year.</b>
            </Paragraph></>}
    ]}/>
    <Paragraph>Extracurriculars</Paragraph>
    <List items={[
        "Cellist, Musica Nova (Spring 2019-Fall 2020)",
        "Freshman Mentor, Freshman Mentor Program (Fall 2018-present)",
        //"President, Animal Rights Club (Fall 2018-present)",
        "Webmaster, Engineer in Residence [EiR] (Spring 2018-present)",
    ]}
    />
</PanelContent>;
