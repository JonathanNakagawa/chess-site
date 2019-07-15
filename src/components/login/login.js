import React from 'react';
import './login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            newUsername:'',
            newPassword:'',
            newPasswordConfirmation:'',
            toggled: true
        };
    }

    handleChange = event => {
        this.setState({[event.target.name]:event.target.value});
    }

    handleSubmit = event => {
       event.preventDefault();
    }

    transition = () => {
        let idHide1 = 'login-form';
        let idHide2 = 'login-switch';
        let idShow1 = 'signup-form';
        let idShow2 = 'signup-switch';
        document.getElementById('switch-button').innerHTML = "Login";
        if(this.toggled) {
            idHide1 = 'signup-form';
            idHide2 = 'signup-switch';
            idShow1 = 'login-form';
            idShow2 = 'login-switch';
            document.getElementById('switch-button').innerHTML = "Sign Up";
        }
        var hideElement1 = document.getElementById(idHide1);
        hideElement1.classList.add("hide");
        hideElement1.classList.remove("load");

        var hideElement2 = document.getElementById(idHide2);
        hideElement2.classList.add("hide");
        hideElement2.classList.remove("load");

        var showElement1 = document.getElementById(idShow1);
        showElement1.classList.remove("hide");
        showElement1.classList.add("load");

        var showElement2 = document.getElementById(idShow2);
        showElement2.classList.remove("hide");
        showElement2.classList.add("load");

        this.toggled = ! this.toggled;

    }

    render() {
        return(
            <div class="page-wrapper">
                <div class="login-container">
                    <div class="login-wrapper load" id="login-form">
                        <h1 class="login-text">Login to Your Account</h1>
                        <form class="login-form">
                            <div class="input-wrapper">
                                <input class="input-field" 
                                    type="username"  
                                    name="username"
                                    placeholder="Username" 
                                    value={this.state.username}
                                    onChange={this.handleChange} 
                                    required
                                /> 
                            </div>
                
                            <div class="input-wrapper">
                                <input class="input-field"
                                    type="password" 
                                    name="password"
                                    placeholder="Password" 
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
                    <div class="login-wrapper hide" id="signup-form">
                        <h1 class="login-text">Create an Account</h1>
                        <form class="login-form">
                            <div class="input-wrapper">
                                <input class="input-field" 
                                    type="username"  
                                    name="username"
                                    placeholder="Create Username" 
                                    value={this.state.username}
                                    onChange={this.handleChange} 
                                    required
                                /> 
                            </div>
                
                            <div class="input-wrapper">
                                <input class="input-field"
                                    type="password" 
                                    name="password"
                                    placeholder="Create Password" 
                                    value={this.state.password} 
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div class="input-wrapper">
                                <input class="input-field"
                                    type="password" 
                                    name="password"
                                    placeholder="Confirm Password" 
                                    value={this.state.password} 
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <button class="input-button" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
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
                        <button class="switch-button" id="switch-button" onClick={this.transition}>Sign Up</button>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
