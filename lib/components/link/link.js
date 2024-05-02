import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { StyledLink } from './styled';
const Link = (props, ref) => {
    const { className, disabled = false, children, as = 'a', href, } = props;
    return (_jsx(StyledLink, { ref: ref, className: className, as: disabled ? 'p' : as, href: href, disabled: disabled, children: children }));
};
export default React.forwardRef(Link);
//# sourceMappingURL=link.js.map