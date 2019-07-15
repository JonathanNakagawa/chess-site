import React from 'react';
import './login.css';

class LoginForms extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="login-container">
                <div class="login-wrapper load" id="login-form">
                    <h1 class="login-text">Login to Your Account</h1>
                    <form class="login-form">
                        <div class="input-wrapper">
                            <input class="input-field" 
                                type="username"  
                                name="username"
                                placeholder="Username" 
                                value={this.props.username}
                                onChange={this.props.handleChange} 
                                required
                            /> 
                        </div>
            
                        <div class="input-wrapper">
                            <input class="input-field"
                                type="password" 
                                name="password"
                                placeholder="Password" 
                                value={this.props.password} 
                                onChange={this.props.handleChange}
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
                <div class="login-wrapper hide" id="signup-form">
                    <h1 class="login-text">Create an Account</h1>
                    <form class="login-form">
                        <div class="input-wrapper">
                            <input class="input-field" 
                                type="username"  
                                name="username"
                                placeholder="Create Username" 
                                value={this.props.username}
                                onChange={this.props.handleChange} 
                                required
                            /> 
                        </div>
            
                        <div class="input-wrapper">
                            <input class="input-field"
                                type="password" 
                                name="password"
                                placeholder="Create Password" 
                                value={this.props.password} 
                                onChange={this.props.handleChange}
                                required
                            />
                        </div>
                        <div class="input-wrapper">
                            <input class="input-field"
                                type="password" 
                                name="password"
                                placeholder="Confirm Password" 
                                value={this.props.password} 
                                onChange={this.props.handleChange}
                                required
                            />
                        </div>
                        <div>
                            <button class="input-button" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForms;