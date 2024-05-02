import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { StyledSpinner } from './styled';
const Spinner = (props, ref) => {
    const { className, size = 30, light = false, } = props;
    return (_jsx(StyledSpinner, { ref: ref, className: className, size: size, light: light }));
};
export default React.forwardRef(Spinner);
//# sourceMappingURL=spinner.js.map