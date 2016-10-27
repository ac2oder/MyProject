/**
 * Created by Aliaksei on 16.10.2016.
 */

import React, {Component} from 'react'

class Form extends Component {
    static propTypes = {
        onSubmit: React.PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
        };
        this.loginChange = this.loginChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    loginChange(event) {
        this.setState({login: event.target.value});
    }

    passwordChange(event) {
        this.setState({password: event.target.value});
    }

    onSubmit() {
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div>
                <p><input placeholder="Login"
            type="text"
            login={this.state.login}
            onChange={this.loginChange}
                /> </p>
                <p><input placeholder="Password"
            type="password"
            password={this.state.password}
            onChange={this.passwordChange}
                /> </p>
                <button onClick = {this.onSubmit}>Login</button>
            </div>
        );
    }
}

export default Form