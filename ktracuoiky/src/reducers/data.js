import * as types from '../constant/ActionType';
var initialState = {
    username: '',
    password: '',
    isAuthenticate: false,
    isRegister:false,
    errMessage : false
}
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN: {
          console.log(action.data);
          
          if(action.data){ //data ko null
              return action.data
          } 
          else return state 
        }
        case types.REGISTER:{
            console.log('action.isRegister', action.isRegister)
           return {isRegister : action.isRegister}
        }
        case types.ERROR:{
            return {errMessage : true}
        }
        default: return state
    }
}
export default myReducer;