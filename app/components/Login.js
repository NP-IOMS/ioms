import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import styles from '../styles/LoginStyle';
import Header from './Header';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      username: '',
      password: '',
    };
  }

  static navigationOptions = {
    title: 'Login',
    headerShown: false,
  };

  _handleChange = elem => {
    this.setState({
      [elem.id]: elem.value,
    });
    this._clearValidationError(elem.id);
  };

  _onSignIn = elem => {
    elem.preventDefault();
    if (this._validateSignIn()) {
      this.props.navigation.navigate('CreateOrder');
    } else {
      return;
    }
  };

  _validateSignIn() {
    let valid = true;
    if (this.state.username === '') {
      this._showValidationError('username', 'Username can not be empty!');
      valid = false;
    }
    if (this.state.password === '') {
      this._showValidationError('password', 'Password can not be empty!');
      valid = false;
    }
    if (
      valid === true &&
      (this.state.username !== 'Admin' || this.state.password !== 'Admin')
    ) {
      this._showValidationError('login', 'Invalid credentials!');
      valid = false;
    }

    return valid;
  }

  _showValidationError = (elem, msg) => {
    this.setState(prevState => ({
      errors: [
        ...prevState.errors,
        {
          elem,
          msg,
        },
      ],
    }));
  };

  _clearValidationError = elem => {
    this.setState(prevState => {
      let newErrors = [];
      for (let err of prevState.errors) {
        if (elem !== err.elem) {
          newErrors.push(err);
        }
      }
      return {errors: newErrors};
    });
  };

  render() {
    let usernameErrMsg = null;
    let passwordErrMsg = null;
    let loginErrMsg = null;

    for (let err of this.state.errors) {
      if (err.elem === 'username') {
        usernameErrMsg = err.msg;
      }
      if (err.elem === 'password') {
        passwordErrMsg = err.msg;
      }
      if (err.elem === 'login') {
        loginErrMsg = err.msg;
      }
    }
    return (
      <View>
        <View>
          <Header />
        </View>
        <View style={styles.container}>
          <Card
            style={styles.loginCard}
            elevation={5}
            opacity={5}
            cornerRadius={0}>
            <Text style={styles.errMsg}>{loginErrMsg ? loginErrMsg : ''}</Text>

            <Text style={styles.errMsg}>
              {usernameErrMsg ? usernameErrMsg : ''}
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              id="username"
              underlineColorAndroid={'transparent'}
              onChangeText={value => {
                this._handleChange({id: 'username', value});
              }}
            />

            <Text style={styles.errMsg}>
              {passwordErrMsg ? passwordErrMsg : ''}
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              id="password"
              underlineColorAndroid={'transparent'}
              secureTextEntry={true}
              returnKeyType="go"
              multiline={false}
              onChangeText={value => {
                this._handleChange({id: 'password', value});
              }}
            />

            <TouchableOpacity style={styles.btnLogin} onPress={this._onSignIn}>
              <Text style={styles.btnText}>Sign In</Text>
            </TouchableOpacity>
          </Card>
        </View>
      </View>
    );
  }
}
