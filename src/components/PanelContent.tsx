import styled from 'styled-components';
import React, {PropsWithChildren, useState} from 'react';
import {Heading, Subheading} from "./Typography";
import {returnStatement} from "@babel/types";


type ContainerProps = {
    forceScrollbar?: boolean
}
const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10%;
  min-height: ${props => props.forceScrollbar && "70%"}; // 70% is just enough (plus padding) to make the PanelContent slightly bigger than the Panel, forcing a scrollbar
`;

type PanelProps = {
    title: string
    subtitle?: string
    forceScrollbar?: boolean
}

export const PanelContent = ({children, title, subtitle, forceScrollbar}: PropsWithChildren<PanelProps>) => {
    return <Container forceScrollbar={forceScrollbar}>
        <Heading>// {title}</Heading>
        {subtitle && <Subheading>// {subtitle}</Subheading>}
        {children}
    </Container>;
};