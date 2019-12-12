import styled from 'styled-components';
import {MdChevronRight} from 'react-icons/md'
import React, {PropsWithChildren, useState} from 'react';
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

const ItemBody = styled.div<{ active?: boolean }>`
  transition: all 1s;
  margin-left: 15px;  
  ${props => props.active ? "" : "height: 0; overflow: hidden; opacity: 0;"}
`;

type ItemProps = {
    active?: boolean
    title: string
    onClick?: () => void
};

const Item = ({active, children, title, onClick}: PropsWithChildren<ItemProps>) => {
    return <>
        <ItemHandle onClick={onClick}><ItemIcon active={active}/>{title}</ItemHandle>
        <ItemBody active={active}>{children}</ItemBody>
    </>
};
type ExpandableListItem = {
    title: string
    body?: any
}
type ListItem = ExpandableListItem | string;

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