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
            <div class="login-container">
                <div class="login-wrapper">
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

                        <button type="submit">Submit</button> <br/>
                        <label>
                            <input type="checkbox"/> Remember me
                        </label>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
