import {call, put} from 'redux-saga/effect';
import {startLoading, finishLoading} from '../modules/loading';

export default function createRequestSaga(type, request) {
    //성공 및 실패 액션 타입 정의
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return function*(action) {
        yield put(startLoading(type)); //로딩 시작
        try {
            const response = yield call(request, action.payload);
            yield put({
                type : SUCCESS,
                payload : response.data
            });
        } catch(e){
            yield put({
            type : FAILURE,
            payload : e,
            error : true
            });
        }
        yield put (finishLoading(type));
    };
}

//  사용법 : createRequestThunk ('GET_USERS', api.getUsers);