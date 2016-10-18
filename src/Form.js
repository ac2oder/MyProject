/**
 * Created by Aliaksei on 16.10.2016.
 */

import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {login: ''};
        this.loginChange = this.loginChange.bind(this);
        this.state = {password: ''};
        this.passwordChange = this.passwordChange.bind(this);
    }

    loginChange(event) {
        this.setState({login: event.target.login});
    }

    passwordChange(event) {
        this.setState({password: event.target.password});
    }

    handleButton () {
        console.log({this.loginChange});
    }

    render() {
        return (
            <div>
                <p>login: <input
            type="text"
            login={this.state.login}
            onChange={this.loginChange}
                /> </p>
                <p>password: <input
            type="password"
            password={this.state.password}
            onChange={this.passwordChange}
                /> </p>
                <button onClick = {this.handleButton}>Login</button>
            </div>
        );
    }
}


export default Form