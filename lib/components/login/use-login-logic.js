import { useEffect, useState } from "react";
import { validate as validateEmail } from 'email-validator';
const validate = (values) => {
    const errors = {};
    if (!values.password) {
        errors.password = 'Field is required';
    }
    if (!values.email) {
        errors.email = 'Field is required';
    }
    else if (!validateEmail(values.email)) {
        errors.email = 'Please type a valid email address';
    }
    return errors;
};
const useLoginLogic = (onSubmit, initialValues) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            onSubmit(values);
        }
        setIsSubmitting(false);
    }, [errors]);
    const handleSubmit = (event) => {
        if (event)
            event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };
    const handleChange = (fieldName) => (value) => {
        setValues((values) => ({
            ...values,
            [fieldName]: value,
        }));
    };
    return {
        handleChange,
        handleSubmit,
        values,
        errors,
    };
};
export default useLoginLogic;
//# sourceMappingURL=use-login-logic.js.map