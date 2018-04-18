import  signUpReducer from './client/src/signUp/reducer';
import loginReducer from './client/src/login/reducer';
import dashboardReducer from './client/src/dashboard/reducer';


// console.log(signUpReducer);

var rootReducer = {
    'registrationData':signUpReducer,
    'login':loginReducer,
    'dashboard':dashboardReducer
}


// const appReducer = combineReducers({
//     signUpReducer
// });

export default rootReducer;