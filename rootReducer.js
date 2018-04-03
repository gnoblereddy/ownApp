import  signUpReducer from './client/src/signUp/reducer';
import loginReducer from './client/src/login/reducer';


// console.log(signUpReducer);

var rootReducer = {
    'registrationData':signUpReducer,
    'login':loginReducer
}


// const appReducer = combineReducers({
//     signUpReducer
// });

export default rootReducer;