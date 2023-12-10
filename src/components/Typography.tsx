import styled, {css} from 'styled-components';

export const fontFamily = "monospace";

export const Heading = styled.h1`
  font-family: ${fontFamily};
  color: #292929;
`;

export const Subheading = styled.h2`
  font-family: ${fontFamily};
  color: #292929;
  margin-top: 0;
`;

const bodyTextFormatting = `
  font-family: ${fontFamily};
  color: #373737;
  font-size: 18px;
`;

type ParagraphProps = {
    color?: string
    showOnlyWhenVertical?: boolean
}

export const Paragraph = styled.p<ParagraphProps>`
  ${bodyTextFormatting}
  ${props => props.color && "color: " + props.color}; // override color only if requested

  // if requested to hide when vertical, use 'display: none' when horizontal
  @media (orientation: landscape) {
    ${props => props.showOnlyWhenVertical && "display: none"};
  }
`;

export const Span = styled.span`
  ${bodyTextFormatting}
`;

export const Link = styled.a.attrs({
    target: '_blank',
    rel: 'noopener noreferrer'
})`
  text-decoration: none;
  ${bodyTextFormatting};
  color: green;
`;