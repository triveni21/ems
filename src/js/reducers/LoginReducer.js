export default function reducer(state={
	logged_in: false,
	credentials: {},
	message: ""
	}, action){

	switch (action.type) {
		case "CREDENTIALS_VALIDATED":
		{
			return Object.assign({}, state, {logged_in: action.payload.logged_in, credentials: action.payload.credentials, message: action.payload.message})
			break;
		}

		case "CREDENTIALS_VALIDATION_FAILED":
		{
			return Object.assign({}, state, {logged_in: action.payload.logged_in, message: action.payload.message})
			break;
		}

		case "FETCH_EVENTS_REJECTED":
		{
			return {...state, fetching:false,  error: action.payload}
			break;
		}

		case "APPLICATION_LOG_OUT":
		{
            return Object.assign({}, state, {logged_in: action.payload.logged_in,credentials : {},message: action.payload.message})
			break;
		}

		// case "UPDATE_USERNAME":
		// {
		// 	new_state = Object.assign({}, state, action.payload.username)
		// 	 // = action.payload.username;
		// 	return {...new_state, fetching:false,  credentials: credentials}
		// 	break;
		// }

		// case "UPDATE_PASSWORD":
		// {
		// 	new_state = Object.assign({}, state, action.payload.username)
		// 	// new_state = Object.assign({}, state)
		// 	// credentials.password = action.payload.password;
		// 	return {...new_state, fetching:false,  credentials: credentials}
		// 	break;
		// }
	}

	return state;
}