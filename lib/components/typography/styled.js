import styled, { css } from "styled-components";
const headingMargin = css `
    margin: 15px 0;
`;
export const H1 = styled.h1 `
    font-size: 64px;
    text-align: ${pr => pr.align ? pr.align : 'left'};
    ${headingMargin}
`;
export const H2 = styled.h2 `
    font-size: 48px;
    text-align: ${pr => pr.align ? pr.align : 'left'};
    ${headingMargin}
`;
export const H3 = styled.h3 `
    font-size: 24px;
    text-align: ${pr => pr.align ? pr.align : 'left'};
    ${headingMargin}
`;
//# sourceMappingURL=styled.js.map