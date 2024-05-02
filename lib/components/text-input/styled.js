import styled from "styled-components";
import { heights, sidePaddings } from "../../config/sizes";
import CrossIcon from '../../icons/Cross';
export const StyledWrapper = styled.div `
    position: relative;
    width: ${pr => pr.width};
    height: ${pr => heights[pr.innerSize]}px;
`;
/* Real tag is assigned dynamically */
export const StyledTextInput = styled.input `
    box-sizing: border-box;
    position: relative;
    background-color: ${(pr) => pr.error ? '#ffe3e6' : '#EEEEEE'};
    padding: 0;
    padding-left: ${pr => sidePaddings[pr.innerSize] + (pr.withIcon ? sidePaddings[pr.innerSize] + 10 /* icon */ : 0)}px;
    padding-right: ${pr => sidePaddings[pr.innerSize] + (pr.withCross ? sidePaddings[pr.innerSize] /* cross */ : 0)}px;
    height: ${pr => heights[pr.innerSize]}px;
    width: ${pr => pr.width};
    border: none;
    color: #000;
    ${pr => pr.disabled ? `
    background-color: #a6a6a6;
    color: #5e5e5e;
    cursor: not-allowed;
    
    &:hover {
        background-color: #a6a6a6 !important;
        color: #5e5e5e !important;
    }
    ` : ''}
    border-radius: 0;
    outline: none;
    transition: 0.1s ease-out;
    
    box-shadow: inset 0 0 0 2px ${pr => pr.error ? '#d93848' : 'transparent'};
    &:focus {
        box-shadow: inset 0 0 0 2px ${pr => pr.error ? '#d93848' : '#000'};
    }
`;
export const StyledIcon = styled.div.withConfig({
    shouldForwardProp: (prop, defPropValFN) => !["innerSize"].includes(prop) && defPropValFN(prop),
}) `
    box-sizing: border-box;
    position: absolute;
    left: ${pr => sidePaddings[pr.innerSize]}px;
    top: 50%;
    transform: translateY(-50%);

    height: 15px;
    width: 15px;
`;
export const StyledCross = styled(CrossIcon) `
    box-sizing: border-box;
    position: absolute;
    right: ${pr => sidePaddings[pr.innerSize]}px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    height: 15px;
`;
//# sourceMappingURL=styled.js.map