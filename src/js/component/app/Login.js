import React from 'react';
import { Push } from 'react-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/eventActions';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
 

export default class Login extends React.Component{
    // handleOnClick () {
    //     this.props.history.push(null,"Main");
    // }

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <div className="login-panel panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Please Sign In</h3>
                                </div>
                                <div className="panel-body">
                                    <form>
                                        <fieldset>
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="E-mail" name="email"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" placeholder="Password" name="password" value=""/>
                                            </div>
                                            <Link to="/home"> <button className="btn btn-lg btn-success.btn-outline btn-block">Login</button></Link>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/*const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    //routeDispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);*/
