import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import Button from '../button';
import TextInput from '../text-input';
import { SearchWrapper } from './styled';
import SearchIcon from '../../icons/Search';
const Search = (props, ref) => {
    const { size = 'default', className, value, onChange, placeholder, width = '100%', } = props;
    const textInputStyles = {
        size,
        width: '100%',
        placeholder
    };
    return (_jsxs(SearchWrapper, { ref: ref, className: className, width: width, children: [_jsx(TextInput, { value: value, onChange: onChange, placeholder: placeholder, clearable: true, ...textInputStyles }), _jsx(Button, { type: 'secondary', icon: SearchIcon })] }));
};
export default React.forwardRef(Search);
//# sourceMappingURL=search.js.map