export default {
    // Check require input format
    requiredChecker: (input) => {
        return input.toString().length > 0
            ? {...input, isValid: true}
            : {...input, isValid: false, errorMessage: "Ce champ est réquis"};
    }
}