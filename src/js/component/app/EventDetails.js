/**
 * Created by rajashriu on 05-Aug-16.
 */
import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/eventActions';
import Paper from 'material-ui/Paper';

const style = {
    height: 500,
    width: 1000,
    margin: 40,
    textAlign: 'center',
    display: 'inline-block',
};

class EventDetails extends  React.Component{
    render(){
        return(
            <div>
                <Paper style={style} zDepth={2}>
                        <div>Hello There !!!</div>
                </Paper>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);