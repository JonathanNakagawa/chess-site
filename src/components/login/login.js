import React from 'react';
import './login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:''
        };
    }

    handleChange = event => {
        this.setState({[event.target.name]:event.target.value});
    }

    handleSubmit = event => {
       event.preventDefault();
    }

    render() {
        return(
            <div class="page-wrapper">
                <div class="login-container">
                    <div class="login-wrapper">
                        <h1 class="login-text">Login to Your Account</h1>
                        <form class="login-form">
                            <div class="input-wrapper">
                                <input class="input-field" 
                                    type="username"  
                                    name="username"
                                    placeholder="username" 
                                    value={this.state.username}
                                    onChange={this.handleChange} 
                                    required
                                /> 


                            </div>
                
                            <div class="input-wrapper">
                                <input class="input-field"
                                    type="password" 
                                    name="password"
                                    placeholder="password" 
                                    value={this.state.password} 
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <button class="input-button" type="submit">Submit</button>
                            </div>
                            <label>
                                <input type="checkbox"/> Remember me
                            </label>
                        </form>
                    </div>
                </div>
                <div class="switch-wrapper">
                    <div class="signup-switch">
                        <h1 class="switch-title">Don't Have an Account?</h1>
                        <p class="switch-text">Sign Up Here!</p>
                        <button class="switch-button">Sign Up</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
