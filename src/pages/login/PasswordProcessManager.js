import React, {useLayoutEffect, useState} from 'react';

export const PasswordProcessManager = () => {
    // Local state
    const [password, setPassword] = useState('');

    // Handle phone input
    const handleInput = (data) => {
        dispatch(storeResetErrorData());
        setPassword(data);
    }

    // Form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(storeResetErrorData());
        dispatch(emitAttemptUserAuthentication({phone: login, password}));
    }

   return {}
}