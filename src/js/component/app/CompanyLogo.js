/**
 * Created by rajashriu on 05-Aug-16.
 */
import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/eventActions';

class CompanyLogo extends  React.Component{
    render(){
        return(
             <div>
                    <div style={{float:'left',padding:5}}><img src='./img/logo.png'/></div>
             </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyLogo);