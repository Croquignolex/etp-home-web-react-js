import axios from "axios";

// Axios request interceptor to add automatically token
axios.interceptors.request.use(config => {
    config.headers.ContentType = 'Application/json';
    return config;
}, error => Promise.reject(error));

export default {
    apiPostRequest: (url, data = {}) => {
        return new Promise((resolve, reject) => {
            axios.post(url, data)
                .then(res => {
                    const apiResponse = res.data;
                    apiResponse.status
                        ? resolve(apiResponse.data)
                        : reject(apiResponse.message);
                })
                .catch(e => {
                    reject(apiErrorManagement(e.message));
                    if(process.env.NODE_ENV !== 'production') console.log({e});
                })
        });
    }
}

// Manage error messages from api
const apiErrorManagement = (errorMessage) => {
    switch (errorMessage) {
        case "Network Error": return "Erreur du reseau. Merci de vérifier votre connexion internet";
        default: return errorMessage;
    }
}