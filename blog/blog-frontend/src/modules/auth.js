import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';

const SAMPLE_ACTION = 'auth/SAMPLE_ACTION';
const CHANGED_FIELD = 'auth/CHANGED_FIELD';
const INITIALIZE_FORM = 'auth/INITIALZIZE_FORM';

export const sampleAction = createAction(SAMPLE_ACTION);

const initialState = {};

const auth = handleActions(
{
    [SAMPLE_ACTION] : (state, action) => state,
},
    initialState
);

export default auth;