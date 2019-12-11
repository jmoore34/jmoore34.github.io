import styled from 'styled-components';
import React, {PropsWithChildren, useState} from 'react';
// @ts-ignore
import Swipe from 'react-easy-swipe';
// @ts-ignore
import KeyboardEventHandler from 'react-keyboard-event-handler';

const panelWidth = "50vw";
const panelHeight = "50vh";
const panelMargin = "14px";
const totalPanels = 8;
const angularWidth_rads = 2 * Math.PI / totalPanels; // the total angular width of each panel, in radians
const translateFromCenter_putInCalc = `0.5 * ${panelWidth} / ${Math.tan(angularWidth_rads / 2)}`;
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

const Helix = styled.div<{ currentIndex: number }>`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 1s;
  border: 1px red dashed;
  transform: translateZ(calc( -1 * ${translateFromCenter_putInCalc}))
             rotateY(${props => -1 * props.currentIndex * angularWidth_rads}rad); 
`;

const Panel = styled.div<{ index: number }>`
  position: absolute;
  left: ${panelMargin};
  right: ${panelMargin};
  top: ${panelMargin};
  bottom: ${panelMargin};
  background-color: hsla(0deg,100%,100%,0.6);
  border: 5px hsla(${props => props.index * angularWidth_rads}rad, 90%, 50%, 0.9) solid;
  
  transform: rotateY(${props => props.index * angularWidth_rads}rad)
             translateZ(calc(${translateFromCenter_putInCalc}));
`;


export const HelixDisplay = ({children}: PropsWithChildren<{}>) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goRight = () => {
        setTimeout(()=>setCurrentIndex(currentIndex + 1), 10);
    };
    const goLeft = () => {
        setTimeout(()=>setCurrentIndex(currentIndex - 1), 10);
    };


    return <Swipe onSwipeLeft={goRight} onSwipeRight={goLeft}>
        <Container>
            <KeyboardEventHandler handleKeys={['left']} onKeyEvent={goLeft}/>
            <KeyboardEventHandler handleKeys={['right']} onKeyEvent={goRight}/>
            <Scene>
                <Helix currentIndex={currentIndex}>
                    {React.Children.toArray(children).map((content, index) =>
                        <Panel index={index} key={index}>{content}</Panel>
                    )}
                </Helix>
            </Scene>
        </Container>
    </Swipe>;
};