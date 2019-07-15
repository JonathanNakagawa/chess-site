import React from 'react';
import './login.css';

class LoginSwitch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="switch-wrapper">
                <div class="signup-switch">
                    <div class="signup-switch load" id="login-switch">
                        <h1 class="switch-title">Don't Have an Account?</h1>
                        <p class="switch-text">Sign Up Here!</p>
                            
                    </div>
                    <div class="signup-switch hide" id="signup-switch">
                        <h1 class="switch-title">Already Have an Account?</h1>
                        <p class="switch-text">Login Here!</p>
                            
                    </div>
                    <button class="switch-button" id="switch-button" onClick={this.props.transition}>Sign Up</button>
                        
                </div>
            </div>
        );

    }
}

export default LoginSwitch;