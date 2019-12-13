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

export const Paragraph = styled.p`
  ${bodyTextFormatting}
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