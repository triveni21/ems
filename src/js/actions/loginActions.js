import { browserHistory } from 'react-router';

export function login(credentials){
	var valid_login = {
		username: 'triveny21@gmail.com',
		password: 'triveni123'
	}
	if(valid_login.username == credentials.username && valid_login.password == credentials.password)
	 {
	 // 	return {
		// 	type: "CREDENTIALS_VALIDATED",
		// 	payload: {
		// 		logged_in: true,
		// 		credentials: credentials
		// 	}
		// }
		return (dispatch) => {
				browserHistory.push("/home");
        return dispatch({
        	type: "CREDENTIALS_VALIDATED",
					payload: {
						logged_in: true,
						credentials: credentials,
						message: "Logged in successfully"
					}})
    };
	}
	else
	{
		return (dispatch) => {
				browserHistory.push("/");
        return dispatch({
        	type: "CREDENTIALS_VALIDATION_FAILED",
					payload: {
						logged_in: false,
						message: "Invalid username or password"
					}})
    };
	}
}

export function logout(){
	return (dispatch) => {
		browserHistory.push("/");
		return dispatch({
			type: "APPLICATION_LOG_OUT",
			payload: {
				logged_in: false,
				message: "Logged Out Successfully"
			}})
	};
}
export function fetchCredentials(){
	return {
		type: "FETCH_CREDENTIALS",
		payload: {
			username: "triveni",
			password: "triveni123"
		}
	}
}

export function updateUsername(e){
	alert(e.target.value)
	return {
		type: "UPDATE_USERNAME",
		payload: {
			username: e.target.value,
		}
	}
}

export function updatePassword(e){
	alert(e.target.value)
	return {
		type: "UPDATE_PASSWORD",
		payload: {
			username: e.target.value,
		}
	}
}