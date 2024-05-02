import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { StyledButton, StyledIcon } from './styled';
import Spinner from '../spinner';
const Button = (props, ref) => {
    const { type = 'default', icon, size = 'default', className, children, disabled = false, loading, onClick, href, as, to, } = props;
    const styles = {
        innerType: type,
        size,
        disabled,
        withText: children != null
    };
    const spinnerStyles = {
        size: size === 'large' ? 25 : size === 'default' ? 20 : 15,
        light: true,
    };
    const childrenWithIcon = !icon ? children : (_jsxs(_Fragment, { children: [children, _jsx(StyledIcon, { as: icon })] }));
    if (as && !disabled) {
        return (_jsx(StyledButton, { as: as, to: to, ref: ref, className: className, ...styles, children: loading ? (_jsxs(_Fragment, { children: ["Loading", _jsx(Spinner, { ...spinnerStyles })] })) : childrenWithIcon }));
    }
    if (href && !disabled) {
        return (_jsx(StyledButton, { as: 'a', href: href, ref: ref, className: className, ...styles, children: loading ? (_jsxs(_Fragment, { children: ["Loading", _jsx(Spinner, { ...spinnerStyles })] })) : childrenWithIcon }));
    }
    return (_jsx(StyledButton, { as: 'button', type: 'button', onClick: onClick, ref: ref, className: className, ...styles, children: loading ? (_jsxs(_Fragment, { children: ["Loading", _jsx(Spinner, { ...spinnerStyles })] })) : childrenWithIcon }));
};
export default React.forwardRef(Button);
//# sourceMappingURL=button.js.map