import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { StyledFormControl, StyledLabel, StyledError, StyledHint } from './styled';
const FormControl = (props, ref) => {
    const { label = '', htmlFor = '', error = '', hint = '', disabled = false, className, children, onBlur = () => { }, onFocus = () => { }, forceLabel = false, } = props;
    const [focused, setFocused] = useState(false);
    return (_jsxs(StyledFormControl, { ref: ref, className: className, onFocus: (e) => { setFocused(true); onFocus(e); }, onBlur: (e) => { setFocused(false); onBlur(e); }, children: [label ? _jsx(StyledLabel, { htmlFor: htmlFor, focused: forceLabel || disabled || focused || error !== '', error: error !== '', children: label }) : null, children, error ? _jsx(StyledError, { children: error }) : (hint ? _jsx(StyledHint, { children: hint }) : null)] }));
};
export default React.forwardRef(FormControl);
//# sourceMappingURL=form-control.js.map