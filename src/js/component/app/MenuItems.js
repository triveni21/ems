/**
 * Created by rajashriu on 05-Aug-16.
 */
import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/eventActions';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    customWidth: {
        width: 200
    },
};

class MenuItems extends  React.Component{
    constructor(props) {
        super(props);

        this.state = {
            value: 1
        };
    }

    handleChange  (event, index, value) {
        this.setState({value});
    }

    render(){
        return(
            <div>
                <br />
                <DropDownMenu
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
                    style={styles.customWidth}
                    autoWidth={false}
                >
                    <MenuItem value={1} primaryText="Table Tennis" />
                    <MenuItem value={2} primaryText="Carrom" />
                    <MenuItem value={3} primaryText="Chess" />
                </DropDownMenu>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItems);