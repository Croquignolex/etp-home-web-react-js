import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

/*// Attempt user authentication from API
export function* emitAttemptUserAuthentication() {
    yield takeLatest(EMIT_ATTEMPT_USER_AUTHENTICATION, function*({phone, password}) {
        const scope = LOGIN_SCOPE;
        try {
            // Fire event for request
            yield put(storeRequestInit({scope}));
            // API call
            const apiResponse = yield call(apiPostRequest, LOGIN_API_PATH, {phone, password});

            let town = '';
            let sims = [];
            let country = '';
            let reference = '';
            let salePoint = '';
            let commission = '';
            let backIDCard = '';
            let frontIDCard = '';
            let role = {id: '', name: ''};
            let zone = {id: '', map: '', name: '', reference: ''};
            let setting = {id: '', cards: [], charts: [], bars: [], sound: true, session: 15, description: ''};

            const roleData = apiResponse.role;
            const zoneData = apiResponse.zone;
            const userData = apiResponse.user;
            const simsData = apiResponse.puces;
            const agentData = apiResponse.agent;
            const settingData = apiResponse.setting;
            const avatarFromServer = getImageFromServer(userData.avatar, PROFILE_SCOPE);
            const {id, name, poste, email, adresse, created_at, description} = userData;

            // Set user data into local storage
            yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_NAME, name);
            yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_POST, poste);
            yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_EMAIL, email);
            yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_PHONE, phone);
            yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_ADDRESS, adresse);
            yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_ID, id.toString());
            yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_AUTHENTICATION, true);
            yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_TOKEN, apiResponse.token);
            yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_AVATAR, avatarFromServer);
            yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_DESCRIPTION, description);
            yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_CREATION_DATE, created_at);

            if(roleData !== null) {
                role = {
                    name: roleData.name,
                    id: roleData.id.toString()
                }
            }

            if(settingData !== null) {
                setting = {
                    session: settingData.session,
                    id: settingData.id.toString(),
                    sound: settingData.sound === 1,
                    bars: JSON.parse(settingData.bars),
                    description: settingData.description,
                    cards: JSON.parse(settingData.cards),
                    charts: JSON.parse(settingData.charts),
                }
            }

            // Both agent & collector data
            if(COLLECTOR_AGENT_ROLE.includes(role.name)) {
                if(zoneData !== null) {
                    zone = {
                        map: zoneData.map,
                        name: zoneData.nom,
                        id: zoneData.id.toString(),
                        reference: zoneData.reference
                    };
                }
                if(simsData !== null) {
                    simsData.forEach(sim => {
                        sims.push({
                            name: sim.nom,
                            number: sim.numero,
                            balance: sim.solde,
                            id: sim.id.toString(),
                            reference: sim.reference
                        })
                    })
                }
                // Agent Data
                if(AGENT_ROLE.includes(role.name)) {
                    town = agentData.ville;
                    country = agentData.pays;
                    reference = agentData.reference;
                    salePoint = agentData.point_de_vente;
                    commission = agentData.taux_commission;
                    frontIDCard = getImageFromServer(agentData.img_cni, AGENT_SCOPE);
                    backIDCard = getImageFromServer(agentData.img_cni_back, AGENT_SCOPE);
                }
            }

            yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_TOWN, town);
            yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_COUNTRY, country);
            yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_REFERENCE, reference);
            yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_SALE_POINT, salePoint);
            yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_COMMISSION, commission);
            yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_BACK_ID_CARD, backIDCard);
            yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_FRONT_ID_CARD, frontIDCard);

            yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_SIMS, sims);
            yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_ZONE, zone);
            yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_ROLE, role);
            yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_SETTING, setting);

            // Fire event to fill user data
            yield put(storeSetUserFullData({
                post: poste,
                address: adresse,
                id: id.toString(),
                creation: created_at,
                avatar: avatarFromServer,
                name, phone, email, description, zone, sims, role, setting,
                town, country, reference, salePoint, commission, backIDCard, frontIDCard,
            }));
            // Fire event for request
            yield put(storeRequestSucceed({scope}));
        } catch (message) {
            // Fire event for request
            yield put(storeRequestFailed({scope}));
            yield put(storeSetDangerErrorData({message, scope}));
        }
    });
}

// Get user balance & keep into store and local storage
export function* emitUserBalance() {
    yield takeLatest(EMIT_USER_BALANCE, function*() {
        const scope = USER_BALANCE_SCOPE;
        try {
            // Fire event for request
            yield put(storeRequestInit({scope}));
            const apiResponse = yield call(apiGetRequest, BALANCE_API_PATH);
            // Extract balance
            const accountData = apiResponse.caisse;
            let account = {id: '', balance: 0}
            if(accountData) {
                account = {
                    balance: apiResponse.caisse.solde,
                    id: apiResponse.caisse.id.toString(),
                };
            }
            yield call(setLocaleStorageItem, LOCAL_STORAGE_USER_BALANCE, account.balance);
            // Fire event to redux
            yield put(storeSetUserBalance({account}));
            // Fire event for request
            yield put(storeRequestSucceed({scope}));
        } catch (message) {
            // Fire event for request
            yield put(storeRequestFailed({scope}));
            yield put(storeSetDangerErrorData({message, scope}));
        }
    });
}*/

// Combine to export all functions at once
export default function* sagaUser() {
    yield all([
        /*fork(emitUserBalance),
        fork(emitAttemptUserAuthentication),*/
    ]);
}