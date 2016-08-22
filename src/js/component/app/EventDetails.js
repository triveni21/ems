/**
 * Created by rajashriu on 05-Aug-16.
 */
import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/eventActions';


class EventDetails extends  React.Component{
    render(){
        return(
            <div className="container">
                <div className="jumbotron">
                    <h1>Bootstrap Tutorial</h1>
                    <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
                </div>
                <p>This is some text.</p>
                <p>This is another text.</p>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);