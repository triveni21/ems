import { browserHistory } from 'react-router';

export function fetchEvents(){
	return {
		type: "FETCH_EVENTS_FULFILLED",
		payload: {
			title: "Test Event",
			description: "Test"
		}
	}
}

export function displayOnGoingEvents (){
    return {
        type: "FETCH_ONGOING_EVENTS"
    }
}

export function displayCulturalEvents(){
    return {
        type: "FETCH_CULTURAL_EVENTS"
    }
}

export function displaySportsEvents(){
    return {
        type: "FETCH_SPORTS_EVENTS"
    }
}

export function displayTechnicalEvents(){
    return {
        type: "FETCH_TECHNICAL_EVENTS"
    }
}

export function createNewEvent (event) {
    debugger;
    if((event.eventName.trim() == "") || (event.eventDescription.trim() == "") || (event.startDate)
        || (event.endDate) || (event.eventCategory)){
        alert ("Please enter all the details.");
    }
    else {
        return (dispatch) => {
            return dispatch({
                type: "CREATE_NEW_EVENT",
                payload: {
                    event: event,
                    message: "Event Created Successfully"
                }})
        };
    }
}