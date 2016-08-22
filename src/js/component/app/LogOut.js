/**
 * Created by rajashriu on 05-Aug-16.
 */
import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/eventActions';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'


class LogOut extends React.Component{
    render(){
        return(
            <div className="logout-div" style={{padding:10}}>
                <RaisedButton type="submit" label="Log Out" primary={true}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);