import axios from 'axios';
import swal from "sweetalert";
// import {
//     loginConfirmedAction,
//     Logout,
// } from '../store/actions/AuthActions';

export function signUp(Username,email, password) {
    //axios call
    const postData = {
        Username,
        email,
        password,
        returnSecureToken: true,
    };
    return axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/register`,
        postData,
    );
}

export function login(email, password) {
    const postData = {
        email,
        password,
        returnSecureToken: true,
    };
    return axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/signin`,
        postData,
    );
}

// export function formatError(errorResponse) {
//     // switch (errorResponse.error.message) {
//     //     case 'EMAIL_EXISTS':
//     //         //return 'Email already exists';
//     //         swal("Oops", "Email already exists", "error");
//     //         break;
//     //     case 'EMAIL_NOT_FOUND':
//     //         //return 'Email not found';
//     //        swal("Oops", "Email not found", "error",{ button: "Try Again!",});
//     //        break;
//     //     case 'INVALID_PASSWORD':
//     //         //return 'Invalid Password';
//     //         swal("Oops", "Invalid Password", "error",{ button: "Try Again!",});
//     //         break;
//     //     case 'USER_DISABLED':
//     //         return 'User Disabled';

//     //     default:
//     //         return '';
//     // }
// }

// export function saveTokenInLocalStorage(tokenDetails) {
//     tokenDetails.expireDate = new Date(
//         new Date().getTime() + tokenDetails.expiresIn * 1000,
//     );
//     localStorage.setItem('userDetails', JSON.stringify(tokenDetails));
// }

// export function runLogoutTimer(dispatch, timer, navigate) {
//     setTimeout(() => {
//         //dispatch(Logout(history));
//         dispatch(Logout(navigate));
//     }, timer);
// }

// export function checkAutoLogin(dispatch, navigate) {
//     // const tokenDetailsString = localStorage.getItem('userDetails');
//     // let tokenDetails = '';
//     // if (!tokenDetailsString) {
//     //     dispatch(Logout(navigate));
// 	// 	return;
//     // }

//     // tokenDetails = JSON.parse(tokenDetailsString);
//     // let expireDate = new Date(tokenDetails.expireDate);
//     // let todaysDate = new Date();

//     // if (todaysDate > expireDate) {
//     //     dispatch(Logout(navigate));
//     //     return;
//     // }
		
//     dispatch(loginConfirmedAction());
	
//     // const timer = expireDate.getTime() - todaysDate.getTime();
//     // runLogoutTimer(dispatch, timer, navigate);
// }
