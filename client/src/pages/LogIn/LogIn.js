// import React from "react";
// // import { Col, Row, Container } from "../../components/Grid";
// // import Jumbotron from "../../components/Jumbotron";

// class noMatch extends Component {
// render() {
// return (

 
//           <h1>404 Page Not Found</h1>
        
       
//       );
//     }
// }
// export default NoMatch;

// =====================================================================

import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class LoginForm extends Component {
    // updateUser (userObject) {
    //     this.setState(userObject)
    //   }

        state = {
            username: '',
            password: '',
            redirectTo: null
        }
      
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log('handleSubmit')
        console.log(this.state.username)
        console.log(this.state.password)
        axios.get('/login',
        {params: {
                username: this.state.username,
                password: this.state.password
            }})
            .then(res => {
                console.log('login response: ')
                console.log(res)

                localStorage.setItem('session_token', res.data.token);
                localStorage.setItem('user_welcome', res.data.message);
                localStorage.setItem('user_id', res.data.id);
                localStorage.setItem('username', res.data.username);
               
                    // update the state to redirect to home
                // this.setState({redirectTo: '/'})
                
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div>
                    <h4>Login</h4>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="username">Username</label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    name="username"
                                    placeholder="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="password">Password: </label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="col-7"></div>
                            <button
                                className="btn btn-primary col-1 col-mr-auto"
                               
                                onClick={this.handleSubmit}
                                type="submit">Login</button>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default LoginForm
