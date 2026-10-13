import styled from 'styled-components';
import {MdChevronRight} from 'react-icons/md'
import React, {PropsWithChildren, useRef, useState} from 'react';
import {Span} from "./Typography";


const ItemIcon = styled(MdChevronRight)<{ active?: boolean }>`
  vertical-align: middle;
  transition: transform 1s;
  ${props => props.active && "transform: rotateZ(90deg);"}
`;

const ItemHandle = styled(Span)<{ clickable?: boolean }>`
  margin-left: 5px;
  ${props => props.clickable && "cursor: pointer; color: #008000"};
`;

const ItemSubtitle = styled(Span)`
    color: #8cc148;
`;

const ItemBody = styled.div<{ active?: boolean, maxHeight?: any }>`
  transition: max-height 1s;
  margin-left: 15px;  
  overflow: hidden;
  max-height: ${props => props.maxHeight};
  //props => props.active ? "max-height: 500px;" : "max-height: 0px;"
`;

type ItemProps = {
    active?: boolean
    title: string | JSX.Element
    subtitle?: string
    onClick?: () => void
};

const Item = ({active, children, title, subtitle, onClick}: PropsWithChildren<ItemProps>) => {
    const bodyRef = useRef<HTMLDivElement>(null);
    return <>
        <ItemHandle onClick={onClick} clickable={children != null}><ItemIcon active={active}/>{title} <ItemSubtitle>{subtitle}</ItemSubtitle></ItemHandle>
        <ItemBody active={active} ref={bodyRef} maxHeight={active ? `${bodyRef.current?.scrollHeight}px` : "0px" } >{children}</ItemBody>
    </>
};
type ExpandableListItem = {
    title: string | JSX.Element
    subtitle?: string
    body?: any
}
type ListItem = string | JSX.Element | ExpandableListItem;

type ListProps = {
    items: ListItem[]
};

export const List: React.FC<ListProps> = ({items}) => {
    const [selected, setSelected] = useState<number | null>(null);

    const toggleSelection = (index: number) => {
        if (selected === index)
            setSelected(null); // if click on an open item, close it.
        else
            setSelected(index);
    };
    return <> {
        items.map((item: ListItem, index: number) => {
            if (typeof item === 'string') {
                const title = item as string;
                return <Item title={title}/>;
            } else {
                const {title, subtitle, body} = item as ExpandableListItem;
                return <Item title={title} subtitle={subtitle} onClick={() => toggleSelection(index)} active={selected === index}>{body}</Item>
            }
    })}</>

};