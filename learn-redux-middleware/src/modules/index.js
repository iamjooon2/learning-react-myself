import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import counter, {counterSaga} from './counter';
import samples, {sampleSaga} from './samples';
import loading from './loading';

const rootReducer = combineReducers({
    counter,
    samples,
    loading
});

export function* rootSaga() {
    // all 함수는 여러 사가를 합쳐주는 역할
    yield all([counterSaga(),sampleSaga()]);
}

export default rootReducer;