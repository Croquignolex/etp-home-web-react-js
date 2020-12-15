// Middleware action types
export const EMIT_ATTEMPT_USER_IDENTIFICATION = 'EMIT_ATTEMPT_USER_IDENTIFICATION';
export const EMIT_ATTEMPT_USER_AUTHENTICATION = 'EMIT_ATTEMPT_USER_AUTHENTICATION';

//====================== Middleware trigger actions
// Emit user identification attempt
export const emitAttemptUserIdentification = ({phone}) => ({
    phone,
    type: EMIT_ATTEMPT_USER_IDENTIFICATION
});

// Emit user auth attempt
export const emitAttemptUserAuthentication = ({phone, password}) => ({
    phone,
    password,
    type: EMIT_ATTEMPT_USER_AUTHENTICATION
});



