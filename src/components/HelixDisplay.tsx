import styled from 'styled-components';
import React, {PropsWithChildren, useState} from 'react';
// @ts-ignore
import KeyboardEventHandler from 'react-keyboard-event-handler';
import {Swipeable} from "react-swipeable";

const panelWidth = "50vw";
const panelHeight = "50vh";
const panelsPerCycle = 8.3; // How many panels should fit in 360 degrees. Can be fractional/irrational
const panelsPerColorCycle = 8.7; // How many panels per 360 degrees of hue. Can be fractional/irrational
const angularWidth_rads = 2 * Math.PI / panelsPerCycle; // the total angular width of each panel, in radians
const translateFromCenter_putInCalc = `0.5 * ${panelWidth} / ${Math.tan(angularWidth_rads / 2)}`;
// how much each panel should be translated from the y axis. NOTE: should be placed within a calc() expression

const perPanelVerticalOffset = "25vh";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Scene = styled.div`
  width: ${panelWidth};
  height: ${panelHeight};
  perspective: 1000px;
`;

const Helix = styled.div<{ currentIndex: number }>`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 1s;
  transform: translateZ(calc( -1 * ${translateFromCenter_putInCalc}))
             rotateY(${props => -1 * props.currentIndex * angularWidth_rads}rad)
             translateY(calc(${perPanelVerticalOffset} * ${props => props.currentIndex}));
         
`;

const Panel = styled.div<{ index: number, zIndex: number }>`
  position: absolute;
  width: calc(${panelWidth} - 30px);
  height: ${panelHeight};
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: ${props => props.zIndex};
  
  background-color: hsla(0deg,100%,100%,0.6);
  border: 5px hsla(${props => props.index / panelsPerColorCycle}turn, 90%, 50%, 0.9) solid;
  
  transform: rotateY(${props => props.index * angularWidth_rads}rad)
             translateZ(calc(${translateFromCenter_putInCalc}))
             translateY(calc(-1 * ${perPanelVerticalOffset} * ${props => props.index}));
`;

const gridSize = '2500px';
const gridSquareSize = '100px';
const gridLargeSquareSize = `calc(${gridSquareSize} * 5)`;

const Grid = styled.div`
  position: absolute;
  left: calc(-1 * ${gridSize});
  right: calc(-1 * ${gridSize});
  top: calc(-1 * ${gridSize});
  bottom: calc(-1 * ${gridSize});
  overflow: visible;

  transform: rotateX(90deg)   // Tilt 90 degrees so that it's perpendicular to the panels
             translateZ(calc( -1 * ${panelHeight} * 0.6)) // Push it down under the lowest panel
             rotateZ(17deg);  // Rotate it a bit so that the grid lines don't line up with the first panel 
  
  background-size: 100% 100%, // size for distance fading overlay
                   ${gridSquareSize} ${gridSquareSize}, // Sizes for the horizonal & vertical thin lines
                   ${gridSquareSize} ${gridSquareSize}, 
                   ${gridLargeSquareSize} ${gridLargeSquareSize}, // Sizes for the horizontal & vertical thick lines
                   ${gridLargeSquareSize} ${gridLargeSquareSize};
  background-image: radial-gradient(circle, transparent 0%, white 90%), // distance fade overlay
                    linear-gradient(to right, #818181 1px, transparent 1px), // thin horizontal lines
                    linear-gradient(to bottom, #818181 1px, transparent 1px), // thin vertical lines
                    linear-gradient(to right, #585858 4px, transparent 1px), // thick horizontal lines
                    linear-gradient(to bottom, #585858 4px, transparent 1px); // thick vertical lines
`;


export const HelixDisplay = ({children}: PropsWithChildren<{}>) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const childArray = React.Children.toArray(children);
    const panelCount = childArray.length;

    const fitWithinBounds = (index: number): number => {
        if (index < 0)
            return 0;
        else if (index >= panelCount)
            return panelCount - 1;
        else return index;
    };

    const goRight = () => {
        setTimeout(()=>setCurrentIndex(fitWithinBounds(currentIndex + 1)), 10);
    };
    const goLeft = () => {
        setTimeout(()=>setCurrentIndex(fitWithinBounds(currentIndex - 1)), 10);
    };


    return <Swipeable onSwipedLeft={goRight} onSwipedRight={goLeft}>
        <Container>
            <KeyboardEventHandler handleKeys={['left']} onKeyEvent={goLeft}/>
            <KeyboardEventHandler handleKeys={['right']} onKeyEvent={goRight}/>
            <Scene>
                <Helix currentIndex={currentIndex}>
                    <Grid />
                    {React.Children.toArray(children).map((content, index) => {
                        const zIndex = panelCount - Math.abs(index - currentIndex); // Closer to current panel = higher z-index
                        return <Panel index={index} key={index} zIndex={zIndex}>{content}</Panel>;
                    })}
                </Helix>
            </Scene>
        </Container>
    </Swipeable>;
};