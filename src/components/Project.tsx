import styled from 'styled-components';
import React, {PropsWithChildren, ReactNode, useState} from 'react';
import {Link, Paragraph} from "./Typography";

type ProjectProps = {
    type: string
    tools: string
    overview: ReactNode
    github?: string
    live?: string
}

export const Project: React.FC<ProjectProps> = ({type, tools, overview, github, live}) => <div>
    <Paragraph><b>Type: </b>{type}</Paragraph>
    <Paragraph><b>Tools: </b>{tools}</Paragraph>
    <Paragraph><b>Overview: </b>{overview}</Paragraph>
    {github && <Paragraph><Link href={github}>View on GitHub</Link></Paragraph>}
    {live && <Paragraph><Link href={live}>View live demo</Link></Paragraph>}
</div>;