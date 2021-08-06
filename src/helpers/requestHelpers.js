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
    }
}