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
import CreateEvent from './CreateEvent';

class Header extends  React.Component{
    render(){
        return (
            <div>
                <table>
                    <tr>
                        <td style={{width:'200px'}}>
                            <CompanyLogo/>
                        </td>
                        <td style={{width:'200px'}}>
                            <div style={{width:'350px',textAlign:'center'}}>
                                <p style={{color:'#00BCD4',fontSize:'100%', fontWeight:'900', fontStretch:'ultra-expanded', fontStyle: 'oblique'}}>Synerzip Event Organizer</p>
                            </div>
                        </td>
                        <td style={{width:'200px'}}>
                            <SearchBox/>
                        </td>
                        <td style={{width:'200px'}} className="logout-div">
                            <CreateEvent/>
                        </td>
                        <td style={{width:'200px'}}>
                            <LogOut/>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);