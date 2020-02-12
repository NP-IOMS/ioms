import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import styles from '../styles/HeaderStyle';

const Header: () => React$Node = () => {
  return (
    <View style={styles.headerContainer}>
      <StatusBar backgroundColor="#555061" barStyle="light-content" />
      <Text style={styles.headerText}>Order Management</Text>
    </View>
  );
};

export default Header;
