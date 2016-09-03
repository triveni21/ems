/**
 * Created by rajashriu on 05-Aug-16.
 */
import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/loginActions';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class LogOut extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

    handleOpen () {
        this.setState({open: true});
    }

    handleClose() {
        this.setState({open: false});
    }

    handleOnClick() {
        debugger;
        //var confirmLogout = confirm("Do you want to LogOut ?");
        if(this.state.open){
            this.setState({open: false});
            this.props.actions.logout();
        }
    }
    render(){
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="Ok"
                primary={true}
                onTouchTap={this.handleOnClick.bind(this)}
            />,
        ];

        return (
            <div style={{width:'150px', textAlign:'center'}}>
                <RaisedButton label="Log Out" primary={true} onTouchTap={this.handleOpen.bind(this)} />
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose.bind(this)}
                >
                    Log Out Event Organiser Application?
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);