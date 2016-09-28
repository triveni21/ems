import { browserHistory } from 'react-router';
import _ from 'lodash';

var eventData = require('json!../schema.json');

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
    // var jsonfile = require('jsonfile')
    var onGoingEvents = eventData["events"];
    onGoingEvents = _.filter(onGoingEvents, function(o) {return o.category_id ==  1;});
    return {
        type: "FETCH_ONGOING_EVENTS",
        payload: onGoingEvents
    }
}

export function displayCulturalEvents(){
    var culturalEvents = eventData["events"];
    culturalEvents = _.filter(culturalEvents, function(o) {return o.category_id ==  2;});
    return {
        type: "FETCH_CULTURAL_EVENTS",
        payload: culturalEvents
    }
}

export function displaySportsEvents(){
    var sportsEvents = eventData["events"];
    sportsEvents = _.filter(sportsEvents, function(o) {return o.category_id ==  3;});
    return {
        type: "FETCH_SPORTS_EVENTS",
        payload: sportsEvents
    }
}

export function displayTechnicalEvents(){
    var technicalEvents = eventData["events"]
    technicalEvents = _.filter(technicalEvents, function(o) {return o.category_id ==  4;});
    return {
        type: "FETCH_TECHNICAL_EVENTS",
        payload: technicalEvents
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

export function setSelectedEvent(eventSelected,optionId) {
    var eventDetails;
    var selectEvent = eventData["events"]
    state.eventSelected = eventSelected;
    if(eventSelected){
        eventDetails = _.find(selectEvent, function(o) {return o.id ==  optionId;});
    }
  return{
      type:"SELECTED_EVENT_IN_LIST",
      payload: eventDetails
  }
}