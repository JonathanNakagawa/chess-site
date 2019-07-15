import React from 'react';
import './login.css';

import LoginSwitch from './login-switch';
import LoginForms from './login-forms';

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
                <LoginForms username={this.state.username} password={this.state.password} handleChange={this.handleChange} />
                <LoginSwitch transition={this.transition} />
            </div>
        );
    }
}

export default Login;
