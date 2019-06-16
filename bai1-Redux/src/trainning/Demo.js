import {createStore} from 'redux';
var initialState={
    status:false,
    students:{
        age:20,
        name:'Hà'
    },
    sort:{
        by:'name',
        value:1
    }
}
var myReducer= (state= initialState,action)=>{
    if(action.type==='TOGGLE_STATUS'){
        state.status=!state.status;
        return state;
    }
    if(action.type==='SORT'){
        var {by, value } = action.sort;
        var {status} = state;
        return {
            status : status ,
            sort : {
                by : by ,
                value : value
            }
           
        }

   //     by: action.sort.by;
   //     value:action.sort.value;
   //     return state
   // }
   // return state

}
     
return state ;
}
const store = createStore(myReducer);
console.log('Default',store.getState());
var action= {type:'TOGGLE_STATUS'};
store.dispatch(action);
console.log('TOGGLE_STATUS: ',store.getState());
var sortAction={
    type: 'SORT',
    sort:{
        by:'name',
        value:-1
    }
}
store.dispatch(sortAction);
console.log('SORT',store.getState());


