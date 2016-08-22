/**
 * Created by rajashriu on 05-Aug-16.
 */
import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/eventActions';
import CompanyLogo from './CompanyLogo';
import SearchBox from './SearchBox';
import LogOut from './LogOut';


class Header extends  React.Component{
    render(){
        return (
            <div>
                <CompanyLogo/>
                <SearchBox style={{float:'center'}}/>
                <LogOut style={{float:'right'}}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);