/**
 * Created by rajashriu on 05-Aug-16.
 */
import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/eventActions';
import TextField from 'material-ui/TextField'

class SearchBox extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            eventSearchText: ''
        };
    }
    handleOnChange(e){
        var searchText =  e.target.value.trim();
        this.setState({eventSearchText : searchText});
    }
    render(){
        return(
            <div className="search-bar-div">
                <TextField
                    hintText="Search"
                    type = "text"
                    onChange={this.handleOnChange.bind(this)}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);