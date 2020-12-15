import { all, takeLatest, put, fork, call } from 'redux-saga/effects'


/*// Fetch users from API
export function* emitUsersFetch() {
    yield takeLatest(EMIT_USERS_FETCH, function*() {
        const scope = USERS_SCOPE;
        try {
            // Fire event for request
            yield put(storeRequestInit({scope}));
            const apiResponse = yield call(apiGetRequest, USERS_API_PATH);
            const users = extractUsersData(apiResponse.users);
            // Fire event to redux
            yield put(storeSetUsersData({users}));
            // Fire event for request
            yield put(storeRequestSucceed({scope}));
        } catch (message) {
            // Fire event for request
            yield put(storeRequestFailed({scope}));
            yield put(storeSetDangerErrorData({message, scope}));
        }
    });
}

// Fetch user from API
export function* emitUserFetch() {
    yield takeLatest(EMIT_USER_FETCH, function*({id}) {
        const scope = USER_SCOPE;
        try {
            // Fire event for request
            yield put(storeRequestInit({scope}));
            const apiResponse = yield call(apiGetRequest, `${USERS_DETAILS_API_PATH}/${id}`);
            const user = extractUserData(apiResponse.user, apiResponse.role, apiResponse.caisse);
            // Fire event to redux
            yield put(storeSetUserData({user}));
            // Fire event for request
            yield put(storeRequestSucceed({scope}));
        } catch (message) {
            // Fire event for request
            yield put(storeRequestFailed({scope}));
            yield put(storeSetDangerErrorData({message, scope}));
        }
    });
}

// Extract user data
function extractUserData(apiUser, apiRole, apiAccount) {
    let user = {
        id: '', name: '', post: '', phone: '',
        email: '', avatar: '', address: '', creation: '', description: '',

        role: {id: '', name: ''},
        account: {id: '', balance: ''},
    };
    if(apiRole) {
        user.role = {
            name: apiRole.name,
            id: apiRole.id.toString()
        }
    }
    if(apiAccount) {
        user.account = {
            balance: apiAccount.solde,
            id: apiAccount.id.toString(),
        }
    }
    if(apiUser) {
        user.name = apiUser.name;
        user.post = apiUser.poste;
        user.actionLoader = false;
        user.toggleLoader = false;
        user.phone = apiUser.phone;
        user.email = apiUser.email;
        user.address = apiUser.adresse;
        user.id = apiUser.id.toString();
        user.creation = apiUser.created_at;
        user.description = apiUser.description;
        user.status = apiUser.statut === APPROVE;
        user.avatar = getImageFromServer(apiUser.avatar, PROFILE_SCOPE);
    }
    return user;
}

// Extract users data
function extractUsersData(apiUsers) {
    const users = [];
    if(apiUsers) {
        apiUsers.forEach(data => {
            const {name} = data.role;
            (name !== AGENT && name !== COLLECTOR)
            && users.push(extractUserData(data.user, data.role, data.caisse));
        });
    }
    sortByCreationDate(users);
    return users;
}*/

// Combine to export all functions at once
export default function* sagaUsers() {
    yield all([
        // fork(emitUserFetch),
        // fork(emitUsersFetch),
    ]);
}