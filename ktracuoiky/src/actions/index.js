import * as types from '../constant/ActionType';
export const login = (data) => {
    
    
    return dispatch => {
        fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(response => {
                console.log("response",response);
                
                if (response.authorize === true) {
                    const obj = {
                        isAuthenticate: true,
                        username: data.username,
                        password: data.password
                    }
                    console.log("obj",obj);
                    
                    localStorage.setItem('user', JSON.stringify(obj))
                    dispatch({
                        type: types.LOGIN,
                        data: obj
                    })
                }
                else {
                    dispatch({
                        type: types.ERROR,
                        data: null
                    })
                }
            })
            //khi truy cap dg dan bi loi
            .catch(error => dispatch({
                type: types.ERROR,
               
            }));
    }
}
export const register = (data) => {
    return (dispatch => {
        fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(response => {
                if (response.registration === 'successful') {
                    dispatch({
                        type: types.REGISTER,
                        isRegister: true
                    })
                }
                else {
                    dispatch({
                        type: types.REGISTER,
                        isRegister: false
                    })
                }
            })
            .catch(error => console.error('Error:', error));
    })

}

