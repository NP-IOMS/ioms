import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import styles from '../styles/CreateOrderStyle';
import Header from './Header';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      items: {},
    };
  }
  static navigationOptions = {
    title: 'Home',
    headerShown: false,
  };
  _handleChange = elem => {
    this.setState({
      [elem.id]: elem.value,
    });
    // this._clearValidationError(elem.id);
  };
  render() {
    return (
      <View>
        <View>
          <Header />
        </View>
        <View style={styles.container}>
          <Card style={styles.createOrderCard}>
            <Text style={styles.itemName}>Item 1 Name</Text>
            <Text style={styles.itemDesc}>Item 1 Description</Text>
            <Text style={styles.itemPrice}>INR 10000</Text>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              placeholder="Qty"
              id="qty"
              underlineColorAndroid={'transparent'}
              onChangeText={value => {
                this._handleChange({id: 'qty', value});
              }}
            />
          </Card>
        </View>
      </View>
    );
  }
}
