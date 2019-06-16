import {createStore} from 'redux';
import {status,sort} from './actions/index';
import myReducer from './reducers/index'


   //     by: action.sort.by;
   //     value:action.sort.value;
   //     return state
   // }
   // return state


const store = createStore(myReducer);
console.log('Default',store.getState());

store.dispatch(status());
console.log('TOGGLE_STATUS: ',store.getState());
console.log("test");

store.dispatch(sort({
    by:'hung',
    value:-1
}));
console.log('SORT',store.getState());


