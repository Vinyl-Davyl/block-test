import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import useLoginLogic from './use-login-logic';
import FormControl from '../form-control';
import TextInput from '../text-input';
import Button from '../button';
import { ButtonWrapper, StyledForm } from './styled';
import { H3 } from '../typography';
import Link from '../link';
const Login = (props, ref) => {
    const { onSubmit = () => { }, initialValues = {}, loading = false, registerLink = '#', } = props;
    const { values, errors, handleChange, handleSubmit, } = useLoginLogic(onSubmit, initialValues);
    return (_jsxs(StyledForm, { children: [_jsx(H3, { align: 'center', children: "Sign In" }), _jsx(FormControl, { label: 'Email', htmlFor: 'email', error: errors.email, forceLabel: true, children: _jsx(TextInput, { id: 'email', value: values.email, placeholder: 'Enter email', onChange: (e) => handleChange('email')(e.currentTarget.value), error: !!errors.email }) }), _jsx(FormControl, { label: 'Password', htmlFor: 'password', error: errors.password, forceLabel: true, children: _jsx(TextInput, { id: 'password', type: 'password', value: values.password, placeholder: 'Enter password', onChange: (e) => handleChange('password')(e.currentTarget.value), error: !!errors.password }) }), _jsxs(ButtonWrapper, { children: [_jsx(Link, { href: registerLink, children: "Create account" }), _jsx(Button, { onClick: handleSubmit, loading: loading, children: "Proceed" })] })] }));
};
export default React.forwardRef(Login);
//# sourceMappingURL=login.js.map