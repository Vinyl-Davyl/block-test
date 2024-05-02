import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { StyledTextInput, StyledWrapper, StyledIcon, StyledCross } from './styled';
const TextInput = (props, ref) => {
    const { icon, size = 'default', className, disabled = false, error = false, value, onChange, placeholder, width = '100%', readonly = false, clearable = false, ...rest } = props;
    const styles = {
        innerSize: size,
        disabled: disabled,
        error,
        width,
        withIcon: icon !== undefined,
        withCross: clearable
    };
    return (_jsxs(StyledWrapper, { width: width, innerSize: size, children: [_jsx(StyledTextInput, { type: rest.type || 'text', value: value, onChange: onChange, readOnly: readonly, ref: ref, className: className, placeholder: placeholder, ...styles, ...rest }), _jsx(StyledIcon, { as: icon, innerSize: size }), clearable && value ? (_jsx(StyledCross, { innerSize: size, onClick: () => onChange
                    && onChange({ currentTarget: { value: '' } }) })) : null] }));
};
export default React.forwardRef(TextInput);
//# sourceMappingURL=text-input.js.map