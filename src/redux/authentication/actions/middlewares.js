const EMIT_ATTEMPT_USER_IDENTIFICATION = 'EMIT_ATTEMPT_USER_IDENTIFICATION';
const EMIT_ATTEMPT_USER_AUTHENTICATION = 'EMIT_ATTEMPT_USER_AUTHENTICATION';

export default {
    EMIT_ATTEMPT_USER_IDENTIFICATION,
    EMIT_ATTEMPT_USER_AUTHENTICATION,

    // Emit user identification attempt
    emitAttemptUserIdentification: ({phone}) => ({
        phone,
        type: EMIT_ATTEMPT_USER_IDENTIFICATION
    }),

    // Emit user auth attempt
    emitAttemptUserAuthentication: ({phone, password}) => ({
        phone,
        password,
        type: EMIT_ATTEMPT_USER_AUTHENTICATION
    })
}

