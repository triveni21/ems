import React from 'react';
import { Push } from 'react-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/loginActions';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar';

function mapStateToProps(state){
    return {
        data: state.login,
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}
 
export default class Login extends React.Component{

    handleUsername(e){
        this.props.data.credentials.username = e.target.value;
    }

    handlePassword(e){
        this.props.data.credentials.password = e.target.value;
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.actions.login(this.props.data.credentials);
    }

    // componentWillMount(){
    //   alert("jjjj")
    //   alert(this.props.data.logged_in)
    //   if(this.props.data.logged_in == true){
    //     this.pros.history.pushState(null, '/home')
    //   }
    // }

    render(){
        return(
           
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <div className="login-panel panel panel-default">
                                <div className="panel-heading">
                                  <AppBar
                                    title="Please Sign In"
                                    showMenuIconButton={false}
                                  />

                                </div>
                                <div className="panel-body">
                                    <form onSubmit={this.handleSubmit.bind(this)}>
                                        <fieldset>
                                            <div className="form-group">
                                                <TextField
                                                    hintText="Email"
                                                    type = "email"
                                                    value = {this.props.data.credentials.username}
                                                    onKeyUp={this.handleUsername.bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <TextField 
                                                    ref='password'
                                                    hintText="Password"
                                                    type="password"
                                                    value = {this.props.data.credentials.password}
                                                    onKeyUp={this.handlePassword.bind(this)}/>
                                            </div>
                                                <RaisedButton type="submit" label="Login" primary={true}/>
                                             
                                        </fieldset>
                                    </form>
                                </div>
                                <div className="error">
                                {this.props.data.message}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

            // <input type="email" className="form-control" placeholder="E-mail" name="email"
            //                                      value = {this.props.data.credentials.username}
            //                                      onKeyUp={this.handleUsername.bind(this)}/>

              // <input type="password" className="form-control" placeholder="Password" name="password"
              //                                    value = {this.props.data.credentials.password}
              //                                    onKeyUp={this.handlePassword.bind(this)}/>
              // <button className="btn btn-lg btn-success.btn-outline btn-block">Login</button>