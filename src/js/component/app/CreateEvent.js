/**
 * Created by rajashriu on 25-Aug-16.
 */
import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/eventActions';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';


const styles = {
    customWidth: {
        width: 250
    },
};

class CreateEvent extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            value: 1,
            startDate : null,
            endDate:null
        };
    }

    handleOpen (){
        this.setState({open: true});
    }

    handleEventName (e) {
        this.props.event.eventName = e.target.value;
    }

    handleEventDescription(e) {
        this.props.event.eventDescription = e.target.value;
    }

    handleStartDate(e,date) {
        debugger;
        this.props.event.startDate = date;
        this.setState({startDate:date})
    }

    handleEndDate(e,date) {
        this.props.event.endDate = date;
        this.setState({endDate:date})
    }

    handleSelectChange(event, index, value){
        debugger;
        this.props.event.eventCategory = value;
        this.setState({value})
    }

    handleClose () {
        this.setState({open: false});
    }

    handleSubmit (e) {
        debugger;
        e.preventDefault();
        this.props.actions.createNewEvent(this.props.event);
        this.setState({open: false});
    }


    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onTouchTap={this.handleSubmit.bind(this)}
            />,
        ];

        return (
            <div style={{width:'200px', textAlign:'center'}}>
                <RaisedButton label="+ Create Event" primary={true} onTouchTap={this.handleOpen.bind(this)} />
                <Dialog
                    title="Create New Event"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    <table>
                        <tr>
                            <td style={{width:'150px'}}>
                                <div>Event Name : </div>
                            </td>
                            <td>
                                <TextField
                                    hintText="Event Name"
                                    onKeyUp={this.handleEventName.bind(this)}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td style={{width:'150px'}}>
                                <div>Enter Description : </div>
                            </td>
                            <td>
                                <TextField
                                    hintText="Event Description"
                                    onKeyUp={this.handleEventDescription.bind(this)}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td style={{width:'150px'}}>
                                <div>Start Date : </div>
                            </td>
                            <td>
                                <div>
                                    <DatePicker hintText="Event Start Date"
                                                value={this.state.startDate}
                                                onChange={this.handleStartDate.bind(this)}/>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td style={{width:'150px'}}>
                                <div> End Date : </div>
                            </td>
                            <td>
                                <div>
                                    <DatePicker hintText="Event End Date"
                                                value={this.state.endDate}
                                                onChange={this.handleEndDate.bind(this)}/>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td style={{width:'150px'}}>
                                <div>Event Category :</div>
                            </td>
                            <td>
                                <SelectField
                                    value={this.state.value}
                                    onChange={this.handleSelectChange.bind(this)}
                                    style={styles.customWidth}
                                >
                                    <MenuItem value={1} primaryText="Sports Events" />
                                    <MenuItem value={2} primaryText="Cultural Events" />
                                    <MenuItem value={3} primaryText="Technical Events" />
                                </SelectField>
                            </td>
                        </tr>

                    </table>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    event: state.events
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);