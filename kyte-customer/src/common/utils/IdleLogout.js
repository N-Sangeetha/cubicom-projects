/**
 * Used for logging out user when idle
 */

import { clearAuth } from '../../store/common/actions/login.actions';
import { idleTimeOutDuration } from '../constants/index';
//import { store } from '../../../store/createStore';

const timeStampLocalStorageKey = 'LAST_ACTIVITY_TS';

function getLastActivityTime() {
    return localStorage.getItem(timeStampLocalStorageKey);
}

function setLastActivityTime() {
    localStorage.setItem(timeStampLocalStorageKey, new Date().toISOString());
}

function logoutUserIfTimeOutExceeded(storeInput, action) {
    const ts = getLastActivityTime();
    if (!ts) {
        return null;
    }
    const lastTS = new Date(ts).getTime();
    const currentTS = new Date().getTime();
    if (currentTS - lastTS > idleTimeOutDuration) {
        if (!storeInput) {
            action();
        } else {
            storeInput.dispatch(clearAuth());
        }
    }
    return currentTS - lastTS > idleTimeOutDuration;
}

export class IdleLogout {
    static setLastActivityTime = setLastActivityTime;
    static logoutUserIfTimeOutExceeded = logoutUserIfTimeOutExceeded;
}