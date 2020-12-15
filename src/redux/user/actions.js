// Middleware action types
export const EMIT_ATTEMPT_USER_IDENTIFICATION = 'EMIT_ATTEMPT_USER_IDENTIFICATION';

//====================== Middleware trigger actions
// Emit user auth attempt
export const emitAttemptUserIdentification = ({phone}) => ({
    phone,
    type: EMIT_ATTEMPT_USER_IDENTIFICATION
});


