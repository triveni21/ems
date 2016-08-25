/**
 * Created by rajashriu on 05-Aug-16.
 */
import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/eventActions';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import EventListing from './EventListing'
import EventDetails from './EventDetails'
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const buttonStyle = {
    margin: 20
};

const tabStyles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};
class MenuItems extends  React.Component{
    constructor(props) {
        super(props);

        this.state = {
            value: 1
        };
    }

    handleOnGoingEvents (){
        this.props.actions.displayOnGoingEvents();
    }

    handleCulturalEvents(){
        this.props.actions.displayCulturalEvents();
    }

    handleSportsEvents(){
        this.props.actions.displaySportsEvents();
    }

    handleTechnicalEvents(){
        this.props.actions.displayTechnicalEvents();
    }

    render(){
        return(
                <div>
                    <br />
                    <Tabs>
                        <Tab label="On Going Events"
                             onActive={this.handleOnGoingEvents.bind(this)}
                        >
                            <br/>
                            <div>On Going Events</div>
                        </Tab>
                        <Tab label="Cultural Events"
                             onActive={this.handleCulturalEvents.bind(this)}
                        >
                            <br/>
                            <div>Cultural Events</div>
                        </Tab>
                        <Tab
                            label="Sports Events"
                            onActive={this.handleSportsEvents.bind(this)}
                        >
                            <br/>
                            <div>Sports Events</div>
                        </Tab>
                        <Tab
                            label="Technical Events"
                            onActive={this.handleTechnicalEvents.bind(this)}
                        >
                            <br/>
                            <div>Technical Events</div>
                        </Tab>
                    </Tabs>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItems);