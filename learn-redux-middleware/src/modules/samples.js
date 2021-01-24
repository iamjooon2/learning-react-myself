import {createAction, handleActions} from 'redux-actions';
import {call, put, takeLatest} from 'redux-saga/effects';
import * as api from '../lib/api';
import {startLoading, finishLoading} from './loading';
import createRequestSaga from '../lib/createRequestSaga';

//액션 타입을 만들고, 한 요청 당 세 개씩

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE'; 

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USER_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USER_FAILURE';

export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);

//초기상태 선언
//요청의 로딩 중 상태는 loading이라는 객체에서 관리

function* getPostSaga(action) {
    yield put(startLoading(GET_POST)); //로딩 시작
    // 파라미터로 action 받아올 시 액션의 정보 조회 가능!
    try {
        // call 사용시 Promise 반환하는 함수를 호출하고, 기다릴 수 있다
        // 첫번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수
        const post = yield call(api.getPost, action.payload); //api.getPost(action.pay-load를 의미한다)
        yield put ({
            type: GET_POST_SUCCESS,
            payload: post.data
        });
    }   catch (e) {
        // 트라이캐치로 에러잡기
        yield put ({
            type:GET_POST_FAILURE,
            payload : e,
            error : true
        });
    }
    yield put(finishLoading(GET_POST)); //로딩 완료시
}

function* getUsersSaga(action) {
    yield put(startLoading(GET_USERS)); //로딩 시작
    try {
        // call 사용시 Promise 반환하는 함수를 호출하고, 기다릴 수 있다
        // 첫번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수
        const users = yield call(api.getUsers); //api.getPost(action.pay-load를 의미한다)
        yield put ({
            type: GET_USERS_SUCCESS,
            payload: users.data
        });
    }   catch (e) {
        // 트라이캐치로 에러잡기
        yield put ({
            type:GET_USERS_FAILURE,
            payload : e,
            error : true
        });
    }
    yield put(finishLoading(GET_USERS)); //로딩 완료시
}

export function* sampleSaga(){
    yield takeLatest(GET_POST, getPostSaga);
    yield takeLatest(GET_USERS, getUsersSaga);
}


const initialState = {
    post : null,
    users : null
};

const samples  = handleActions(
    {
        [GET_POST_SUCCESS] : (state, action) => ({
            ...state,
            post : action.payload
        }),
        [GET_USERS_SUCCESS] : (state, action) => ({
            ...state,
            users: action.payload
        })
    },
    initialState
);

export default samples;