import styled from 'styled-components';
import {MdChevronRight} from 'react-icons/md'
import React, {PropsWithChildren, useRef, useState} from 'react';
import {Span} from "./Typography";


const ItemIcon = styled(MdChevronRight)<{ active?: boolean }>`
  vertical-align: middle;
  transition: transform 1s;
  ${props => props.active && "transform: rotateZ(90deg);"}
`;

const ItemHandle = styled(Span)`
  margin-left: 5px;
  cursor: pointer;
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
    onClick?: () => void
};

const Item = ({active, children, title, onClick}: PropsWithChildren<ItemProps>) => {
    const bodyRef = useRef<HTMLDivElement>(null);
    return <>
        <ItemHandle onClick={onClick}><ItemIcon active={active}/>{title}</ItemHandle>
        <ItemBody active={active} ref={bodyRef} maxHeight={active ? `${bodyRef.current?.scrollHeight}px` : "0px" } >{children}</ItemBody>
    </>
};
type ExpandableListItem = {
    title: string | JSX.Element
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
                const {title, body} = item as ExpandableListItem;
                return <Item title={title} onClick={() => toggleSelection(index)} active={selected === index}>{body}</Item>
            }
    })}</>

};