import React from 'react';
import './App.css';
import styled from 'styled-components'

const panelContents = [<h1>1</h1>,<h1>2</h1>,<h1>3</h1>,<h1>4</h1>,<h1>5</h1>,<h1>6</h1>,<h1>7</h1>,<h1>8</h1>];

const panelWidth = "50vw";
const panelHeight = "50vh";
const panelMargin = "14px";
const totalPanels = panelContents.length;
const angularWidth_rads = 2 * Math.PI / totalPanels; // the total angular width of each panel, in radians
const translateFromCenter_putInCalc = `0.5 * ${panelWidth} / ${Math.tan(angularWidth_rads/2)}`;
// how much each panel should be translated from the y axis. NOTE: should be placed within a calc() expression

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Scene = styled.div`
  width: ${panelWidth};
  height: ${panelHeight};
  border: 1px #a3a3a3 dashed;
  perspective: 1000px;
`;

const Helix = styled.div<{currentIndex: number}>`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 1s;
  border: 1px red dashed;
  transform: translateZ(calc( -1 * ${translateFromCenter_putInCalc}))
             rotateY(${props => -1 * props.currentIndex * angularWidth_rads}rad); 
`;

const Panel = styled.div<{index: number}>`
  position: absolute;
  left: ${panelMargin};
  right: ${panelMargin};
  top: ${panelMargin};
  bottom: ${panelMargin};
  background-color: hsla(0deg,100%,100%,0.6);
  border: 5px hsla(${props => props.index*angularWidth_rads}rad, 90%, 50%, 0.9) solid;
  
  transform: rotateY(${props => props.index*angularWidth_rads}rad)
             translateZ(calc(${translateFromCenter_putInCalc}));
`;

const App: React.FC = () => {
  return (
    <Container>
      <Scene>
        <Helix currentIndex={3}>
            {panelContents.map( (content, index) =>
                <Panel index={index} key={index}>{content}</Panel>
            )}
        </Helix>
      </Scene>
    </Container>
  );
};

export default App;
