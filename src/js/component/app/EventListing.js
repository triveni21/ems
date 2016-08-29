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

class EventListing extends  React.Component{
    render(){
        //var activeEvent = this.props.eventFlag;

        return(
            <div>
                <div>
                    <List>
                        <Subheader>{this.props.eventFlag}</Subheader>
                        <ListItem
                            leftAvatar={<Avatar src="images/ok-128.jpg" />}
                            primaryText="Sports"
                            secondaryText={
                            <p>
                            <span style={{color: darkBlack}}>Table Tennis</span> --
                                The scores for today's match are as follows ...
                            </p>
                        }
                            secondaryTextLines={2}
                        />

                        <Divider inset={true} />

                        <ListItem
                            leftAvatar={<Avatar src="images/ok-128.jpg" />}
                            primaryText="Cultural Events"
                            secondaryText={
                            <p>
                            <span style={{color: darkBlack}}>Dancing</span> --
                                List of the participants and performances ..
                            </p>
                        }
                            secondaryTextLines={2}
                        />

                        <Divider inset={true} />

                        <ListItem
                            leftAvatar={<Avatar src="images/ok-128.jpg" />}
                            primaryText="Sports"
                            secondaryText={
                            <p>
                            <span style={{color: darkBlack}}>Chess</span> --
                                The scores for today's match are as follows ...
                            </p>
                        }
                            secondaryTextLines={2}
                        />

                        <Divider inset={true} />

                        <ListItem
                            leftAvatar={<Avatar src="images/ok-128.jpg" />}
                            primaryText="Technical"
                            secondaryText={
                            <p>
                            <span style={{color: darkBlack}}>React Session</span> --
                                Today's session will be conducted by ...
                            </p>
                        }
                            secondaryTextLines={2}
                        />

                        <Divider inset={true} />

                        <ListItem
                            leftAvatar={<Avatar src="images/ok-128.jpg" />}
                            primaryText="Cultural"
                            secondaryText={
                            <p>
                            <span style={{color: darkBlack}}>Skit</span> --
                                Participants for skit and skit timings...
                            </p>
                        }
                            secondaryTextLines={2}
                        />

                    </List>
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