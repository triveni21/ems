export function fetchEvents(){
	return {
		type: "FETCH_EVENTS_FULFILLED",
		payload: {
			title: "Test Event",
			description: "Test"
		}
	}
}