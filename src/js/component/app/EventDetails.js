/**
 * Created by rajashriu on 05-Aug-16.
 */
import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/eventActions';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    height: 500,
    width: 1000,
    margin: 40,
    textAlign: 'center',
    display: 'inline-block',
};

class EventDetails extends  React.Component{
    handleEditEvent () {

    }
    render(){
        let eventDetails = _.map(this.props.data,(option) => {
            if(option.category_id == this.props.category_id){
                return(
                    <table>
                        <tr>
                            <td>
                                <div><p style={{color:'#00BCD4',fontSize:'15px', fontWeight:'900', fontStretch:'ultra-expanded', fontStyle: 'oblique'}}>Event Name :</p></div>
                            </td>
                            <td>
                                <div>{option.title}</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div><p style={{color:'#00BCD4',fontSize:'15px', fontWeight:'900', fontStretch:'ultra-expanded', fontStyle: 'oblique'}}> Event Start Date:</p></div>
                            </td>
                            <td>
                                <div>{option.start_date}</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div> <p style={{color:'#00BCD4',fontSize:'15px', fontWeight:'900', fontStretch:'ultra-expanded', fontStyle: 'oblique'}}> Event End Date:</p></div>
                            </td>
                            <td>
                                <div>{option.end_date}</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div> <p style={{color:'#00BCD4',fontSize:'15px', fontWeight:'900', fontStretch:'ultra-expanded', fontStyle: 'oblique'}}>Event Description:</p></div>
                            </td>
                            <td>
                                <div>{option.description}</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div><p style={{color:'#00BCD4',fontSize:'15px', fontWeight:'900', fontStretch:'ultra-expanded', fontStyle: 'oblique'}}>Event Type:</p></div>
                            </td>
                            <td>
                                <div>{this.props.eventFlag}</div>
                            </td>
                        </tr>
                    </table>
                );
            }
        });
        return(
            <div>
                <Paper style={style} zDepth={2}>
                    <div style={{textAlign:'center',padding:'40px'}}>
                        {eventDetails}
                        <table>
                            <tr>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <RaisedButton label="Edit Event" primary={true} onTouchTap={this.handleEditEvent.bind(this)} />
                            </tr>
                        </table>
                    </div>
                </Paper>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    data: state.events["events"],
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);