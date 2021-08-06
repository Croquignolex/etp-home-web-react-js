export default {
    // App url
    APP: process.env.REACT_APP_URL,
    // Api base url
    API: process.env.REACT_APP_API_BASE_URL,
    // Redirected profile app urls
    PROFILE: {
        ADMIN: process.env.REACT_APP_ADMIN_APP_URL,
        AGENT: process.env.REACT_APP_AGENT_APP_URL,
        MANAGER: process.env.REACT_APP_MANAGER_APP_URL,
        OVERSEER: process.env.REACT_APP_OVERSEER_APP_URL,
        RESOURCE: process.env.REACT_APP_RESOURCE_APP_URL,
        COLLECTOR: process.env.REACT_APP_COLLECTOR_APP_URL,
        ACCOUNTANT: process.env.REACT_APP_ACCOUNTANT_APP_URL,
        SUPERVISOR: process.env.REACT_APP_SUPERVISOR_APP_URL,
    }
}