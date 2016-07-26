export default function reducer(state={
	events: [],
	fetching: false,
	fetched: false,
	error:null
	}, action){

	switch (action.type) {
		case "FETCH_EVENTS":
		{
			return {...state, fetching: true}
			break;
		}
		case "FETCH_EVENTS_FULFILLED":
		{
			return {...state, fetching:false, fetched: true, events: action.payload}
			break;
		}

		case "FETCH_EVENTS_REJECTED":
		{
			return {...state, fetching:false,  error: action.payload}
			break;
		}
	}

	return state;
}