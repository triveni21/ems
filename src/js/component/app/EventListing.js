/**
 * Created by rajashriu on 05-Aug-16.
 */
import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/eventActions';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import _ from 'lodash'

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400} />
    </IconButton>
);

const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Reply</MenuItem>
        <MenuItem>Forward</MenuItem>
        <MenuItem>Delete</MenuItem>
    </IconMenu>
);

class EventListing extends React.Component{
    handleSelectedEvent (optionId){
        debugger;
        alert("I am selected");
        this.props.actions.setSelectedEvent(optionId);
    }
    render(){
        let eventLists = _.map(this.props.data,(option) => {
            if(option.category_id == this.props.category_id){
                return(
                    <ListItem
                        leftAvatar={<Avatar src="img/On-Going-Image.png" />}
                        primaryText={option.title}
                        secondaryText={
                <p onClick={this.handleSelectedEvent.bind(this,option.id)}>
                <span style={{color: darkBlack}}>{option.title}</span> --
                    {option.description}
                </p>
            }
                        secondaryTextLines={2}
                    />
                );
            }
        });

        return(
            <div>
                <div>
                    <List>
                        <Subheader>{this.props.eventFlag}</Subheader>
                        {eventLists}
                    </List>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    // alert(JSON.stringify(state.events));
    return {
        data: state.events["events"],
    };
}


const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(EventListing);