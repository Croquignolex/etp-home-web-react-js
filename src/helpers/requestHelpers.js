export default {
    // Manage succeeded request
    requestSucceeded: (request) => {
        const {failed, loading, succeeded} = request
        return succeeded && !failed && !loading;
    },

    // Manage failed request
    requestFailed: (request) => {
        const {failed, loading, succeeded} = request
        return !succeeded && failed && !loading;
    },

    // Manage loading request
    requestLoading: (request) => {
        const {failed, loading, succeeded} = request
        return !succeeded && !failed && loading;
    },

    // Init value for a request
    requestInitValue() {
        return {failed: false, loading: true, succeeded: false, message: ""}
    },

    // Failed value for a request
    requestFailedValue(message) {
        return {failed: true, loading: false, succeeded: false, message}
    },

    // Succeeded value for a request
    requestSucceededValue(message) {
        return {failed: false, loading: false, succeeded: true, message}
    }
}