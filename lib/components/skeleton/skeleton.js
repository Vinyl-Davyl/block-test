import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { StyledSkeleton } from './styled';
const Skeleton = (props, ref) => {
    const { className, width = 100, height = 100, borderRadius = 'none', } = props;
    return (_jsx(StyledSkeleton, { ref: ref, className: className, width: width, height: height, borderRadius: borderRadius }));
};
export default React.forwardRef(Skeleton);
//# sourceMappingURL=skeleton.js.map