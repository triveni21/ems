export default function reducer(state={
	events: {},
	fetching: false,
	fetched: false,
	error:null,
    eventSelected : false
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

        case "FETCH_ONGOING_EVENTS":
        {	
            return Object.assign({}, state, {events: action.payload})
            break;
        }

        case "FETCH_CULTURAL_EVENTS":
        {
            return Object.assign({}, state, {events: action.payload})
			break;
        }

        case "FETCH_SPORTS_EVENTS":
        {
            return Object.assign({}, state, {events: action.payload})
			break;
        }

        case "FETCH_TECHNICAL_EVENTS":
        {
            return Object.assign({}, state, {events: action.payload})
			break;
        }

		case "CREATE_NEW_EVENT":
		{
			return Object.assign({}, state, {logged_in: action.payload.event, message: action.payload.message})
			alert("Event Added Successfully");
			break;
		}
        case "SELECTED_EVENT_IN_LIST":
        {
            return Object.assign({},state,{eventSelected : action.payload})

        }
	}

	return state;
}