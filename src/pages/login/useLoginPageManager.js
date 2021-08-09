import React, {useState} from 'react';

export const useLoginPageManager = () => {
    // Local state
    const [login, setLogin] = useState('');
    const [identified, setIdentified] = useState(false);

    const handleIdentified = (identifiedData, loginData) => {
        setIdentified(identifiedData)
        setLogin(loginData)
    }

    // Render
    return {login, identified};
}