const EMIT_ATTEMPT_USER_IDENTIFICATION = 'EMIT_ATTEMPT_USER_IDENTIFICATION';

export default {
    EMIT_ATTEMPT_USER_IDENTIFICATION,

    // Emit user identification attempt
    emitAttemptUserIdentification: ({phone}) => ({
        phone,
        type: EMIT_ATTEMPT_USER_IDENTIFICATION
    }),
}

