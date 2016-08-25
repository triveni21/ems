export default function reducer(state={
	events: [],
	fetching: false,
	fetched: false,
	error:null,
    onGoingEvents:'none',
    culturalEvents:'none',
    sportsEvents:'none',
    technicalEvents:'none'
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
            return Object.assign({}, state, {onGoingEvents: 'block',culturalEvents:'none',sportsEvents:'none',technicalEvents:'none'})
        }

        case "FETCH_CULTURAL_EVENTS":
        {
            return Object.assign({}, state, {onGoingEvents: 'none',culturalEvents:'block',sportsEvents:'none',technicalEvents:'none'})
        }

        case "FETCH_SPORTS_EVENTS":
        {
            return Object.assign({}, state, {onGoingEvents: 'none',culturalEvents:'none',sportsEvents:'block',technicalEvents:'none'})
        }

        case "FETCH_TECHNICAL_EVENTS":
        {
            return Object.assign({}, state, {onGoingEvents: 'none',culturalEvents:'none',sportsEvents:'none',technicalEvents:'block'})
        }
	}

	return state;
}