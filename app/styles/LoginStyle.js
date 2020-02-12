import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#fff',
  },
  container: {
    alignSelf: 'stretch',
    backgroundColor: '#9132a8',
    marginTop: 100,
    marginLeft: 30,
    marginRight: 30,
  },
  loginCard: {
    alignSelf: 'stretch',
    width: '100%',
  },
  textInput: {
    alignSelf: 'stretch',
    width: '80%',
    height: 50,
    marginBottom: 30,
    marginLeft: 35,
    color: '#000',
    backgroundColor: '#fff',
    borderColor: '#199187',
    borderBottomColor: '#199187',
    borderBottomWidth: 2,
  },
  btnLogin: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#555061',
    marginTop: 20,
    // borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    height: 60,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 5,
  },
  errMsg: {
    color: '#bf483f',
    fontStyle: 'italic',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
