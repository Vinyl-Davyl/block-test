import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useRef } from 'react';
import TextInput from '../text-input';
import { StyledWrapper, StyledHeader, StyledArrow, StyledPopover, List, ListItem } from './styled';
import { useSelectLogic } from './use-select-logic';
const Select = (props, ref) => {
    const { size = 'default', className, disabled = false, error = false, option, listOptions, onChange, placeholder, width = '100%', } = props;
    const textInputStyles = {
        size,
        disabled,
        error,
        width: '100%',
        placeholder,
        readonly: true,
    };
    const headerRef = useRef(null);
    const popoverRef = useRef(null);
    const { onOptionClick, optionsListVisible, setOptionsListVisible } = useSelectLogic(onChange, { headerRef, popoverRef }, disabled);
    return (_jsxs(StyledWrapper, { className: className, width: width, innerSize: size, children: [_jsxs(StyledHeader, { ref: headerRef, onClick: () => setOptionsListVisible(true), children: [_jsx(TextInput, { value: option ? option.value : '', ...textInputStyles }), _jsx(StyledArrow, { innerSize: size, upwards: optionsListVisible })] }), _jsx(StyledPopover, { ref: popoverRef, width: width, visible: optionsListVisible, children: _jsx(List, { children: listOptions?.map((option) => (_jsx(ListItem, { innerSize: size, onClick: () => onOptionClick(option), children: option.label }, option.value))) }) })] }));
};
export default React.forwardRef(Select);
//# sourceMappingURL=select.js.map