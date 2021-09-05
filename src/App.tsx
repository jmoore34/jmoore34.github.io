import React from 'react';
import './App.css';
import styled from "styled-components";
import {HelixDisplay} from "./components/HelixDisplay";
import {
  AboutMePanel,
  CourseworkPanel,
  EducationPanel,
  FrameworksPanel,
  LanguagesPanel,
  MiscSkillsPanel, ProjectsPanel,
  StartPanel, WorkPanel
} from "./content/panels";

const App: React.FC = () => {
  return <HelixDisplay>
    <StartPanel/>
    <AboutMePanel/>
    <EducationPanel/>
    <CourseworkPanel/>
    <WorkPanel/>
    <LanguagesPanel/>
    <FrameworksPanel/>
    <MiscSkillsPanel/>
    <ProjectsPanel/>
  </HelixDisplay>
};

export default App;
