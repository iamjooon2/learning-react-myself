import {handleActions} from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

//액션 타입을 선언
//한 요청당 세 개를 만들어야 한다

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE'; 

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USER_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USER_FAILURE';

//thunk 함수를 생성한다
//thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치함

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

//초기상태 선언
//요청의 로딩 중 상태는 loading이라는 객체에서 관리

const initialState = {
    loading : {
        GET_POST : false,
        GET_USERS : false
    },
    post : null,
    users : null
};

const samples  = handleActions(
    {
        [GET_POST] : state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: true //요청 시작
            }
        }),
        [GET_POST_SUCCESS] : (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false //요청 끝
            },
            post : action.payload
        }),
        [GET_POST_FAILURE] : (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false //요청 끝
            }
        }),
        [GET_USERS] : state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USER: true //요청 시작
            }
        }),
        [GET_USERS_SUCCESS] : (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USER: false // 요청 완료
            }
        }),
        [GET_USERS_FAILURE] : (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USER: false // 요청 완료
            }
        })
    },
    initialState
);

export default samples;