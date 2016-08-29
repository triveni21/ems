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

class CreateEvent extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

    handleOpen (){
        this.setState({open: true});
    }

    handleClose () {
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
                onTouchTap={this.handleClose.bind(this)}
            />,
        ];

        return (
            <div>
                <RaisedButton label="+ Create Event" primary={true} onTouchTap={this.handleOpen.bind(this)} />
                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    <table>
                        <tr>
                            <td>
                                <div>Enter the Event Name:</div>
                            </td>
                            <td>
                                <TextField
                                    hintText="Hint Text"
                                />
                            </td>
                        </tr>
                    </table>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);