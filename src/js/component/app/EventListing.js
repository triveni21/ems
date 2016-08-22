/**
 * Created by rajashriu on 05-Aug-16.
 */
import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/eventActions';

class EventListing extends  React.Component{
    render(){
        return(
            <div className="container">
                <div className="list-group">
                    <a href="#" className="list-group-item active">Table Tennis</a>
                    <a href="#" className="list-group-item">Carrom</a>
                    <a href="#" className="list-group-item">Chess</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EventListing);