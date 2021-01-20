import {createStore} from 'redux';

const { switchStatement } = require("@babel/types");

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => ({type: TOGGLE_SWITCH});
const increase = difference => ({type: INCREASE, difference});
const decrease = () => ({type: DECREASE});

const initialState = {
    toggle : false,
    counter : 0
};

//state가 undefined일 때는 initialState를 기본 값으로 사용
function reducer(state = initialState, action){
    //action.type에 처리하는 다른 작업들
    switch (action.type){
        case TOGGLE_SWITCH:
            return {
                ...state, //불변성 유지
                toggle: !state.toggle
            }
            case INCREASE:
                return {
                    ...state,
                    counter: state.counter + action.difference
                };
            case DECREASE:
                return {
                    ...state,
                    counter: state.counter -1
                };
                default:
                    return state;
    }
}

const store = createStore(reducer);

const render = () => {
    const state = store.getState(); //현재상태 불러오기
    //토글처리
    if (state.toggle){
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }
    counter.innerText = state.counter;
};

render();
store.subscribe(render);

divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
    store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
    store.dispatch(decrease());
};