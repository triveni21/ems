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