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

    // componentWillMount(){
    //   this.props.actions.displayOnGoingEvents();
    // }

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
                            <table>
                                <tr>
                                    <td style={{width:'350px'}}>
                                        <EventListing eventFlag='On Going Events'/>
                                    </td>
                                    <td style={{width:'1050px'}}>
                                        <EventDetails eventFlag='On Going Events'/>
                                    </td>
                                </tr>
                            </table>
                        </Tab>
                        <Tab label="Cultural Events"
                             onActive={this.handleCulturalEvents.bind(this)}
                        >
                            <br/>
                            <table>
                                <tr>
                                    <td style={{width:'350px'}}>
                                        <EventListing eventFlag='Cultural Events'/>
                                    </td>
                                    <td style={{width:'1050px'}}>
                                        <EventDetails eventFlag='Cultural Events'/>
                                    </td>
                                </tr>
                            </table>
                        </Tab>
                        <Tab
                            label="Sports Events"
                            onActive={this.handleSportsEvents.bind(this)}
                        >
                            <br/>
                            <table>
                                <tr>
                                    <td style={{width:'350px'}}>
                                        <EventListing eventFlag='Sports Events'/>
                                    </td>
                                    <td style={{width:'1050px'}}>
                                        <EventDetails eventFlag='Sports Events'/>
                                    </td>
                                </tr>
                            </table>
                        </Tab>
                        <Tab
                            label="Technical Events"
                            onActive={this.handleTechnicalEvents.bind(this)}
                        >
                            <br/>
                            <table>
                                <tr>
                                    <td style={{width:'350px'}}>
                                        <EventListing eventFlag='Technical Events'/>
                                    </td>
                                    <td style={{width:'1050px'}}>
                                        <EventDetails eventFlag='Technical Events'/>
                                    </td>
                                </tr>
                            </table>
                        </Tab>
                    </Tabs>
                </div>
        );
    }
}

function mapStateToProps(state){
    alert(JSON.stringify(state.events));
    return {
        data: state.events,
    };
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItems);