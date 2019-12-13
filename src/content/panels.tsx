import {PanelContent} from "../components/PanelContent";
import * as React from "react";
import {Link, Paragraph, Span} from "../components/Typography";
import {List} from "../components/List";
import {
    FokusProject,
    IRChatProject,
    PortfolioProject,
    ShareCalcProject,
    STVProject,
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
        I am a junior in Computer Science at UT Dallas.
        I have a love for personal projects, from React-based websites like this one to embedded microcontroller code
        to algorithm design in functional programming languages.
        I am interested in gaining more professional experience within the CS/SE field as well as branching out more into
        backend, full-stack, and mobile development.
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
        "Academic Excellence Scholarship, Honors Level",
        "GPA 3.949"
    ]}/>
</PanelContent>;

export const CourseworkPanel = () => <PanelContent title="Education" subtitle="Coursework">
    <List items={[
        "Data Structures & Algorithms",
        "Digital Logic",
        "Software Engineering",
        "Computer Architecture",
        "Organization of Programming Languages",
        "Technical & Professional Communication"
    ]}/>
</PanelContent>;

export const LanguagesPanel = () => <PanelContent title="Skills" subtitle="Languages">
    <List items={[
        "Kotlin",
        "Haskell",
        "C#",
        "C++",
        "Typescript",
        "ES10 Javascript",
        "Java"
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

    <Paragraph>Currently self-studying</Paragraph>
    <List items={[
        "Django",
        "Exposed (Kotlin ORM)"
    ]}/>
</PanelContent>;

export const MiscSkillsPanel = () => <PanelContent title="Skills" subtitle="Tools">
    <Paragraph>Software Development</Paragraph>
    <List items={[
        "Git",
        "Unit testing (Jest, JUnit 5)",
        "Linux + Bash"
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
        {title: "Portfolio Website (Fall 2019)", body: <PortfolioProject/>},
        {title: "ShareCalc (Fall 2019)", body: <ShareCalcProject/>},
        {title: "Fokus (Spring 2019)", body: <FokusProject/>},
        {title: "Web Tuner (Spring 2019)", body: <TunerProject/>},
        {title: "IR Chat (Fall 2018)", body: <IRChatProject/>},
        {title: "Web-STV (Ongoing)", body: <STVProject/>}
    ]}/>
</PanelContent>;

export const WorkPanel = () => <PanelContent title="Other experience">
    <Paragraph>Workplace experience (click to expand)</Paragraph>
    <List items={[
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
        "Cellist, Musica Nova (Spring 2019-present)",
        "Freshman Mentor, Freshman Mentor Program (Fall 2018-present)",
        "President, Animal Rights Club (Fall 2018-present)",
        "Webmaster, Engineer in Residence [EiR] (Spring 2018-present)",
    ]}
    />
</PanelContent>;
