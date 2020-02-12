import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ededed',
    width: '100%',
  },
  createOrderCard: {
    alignSelf: 'stretch',
    width: '90%',
    backgroundColor: '#fff',
    padding: 5,
    margin: 20,
    borderColor: '#555061',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 20,
    width: '30%',
    borderColor: '#000',
    padding: 3,
    fontWeight: 'bold',
    color: '#2e2a2a',
  },
  itemDesc: {
    fontSize: 15,
    width: '40%',
    borderColor: '#000',
    padding: 3,
    color: '#2e2a2a',
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 12,
    width: '17%',
    borderColor: '#000',
    padding: 3,
    color: '#2e2a2a',
    fontWeight: 'bold',
  },
  textInput: {
    width: '13%',
    height: 30,
    borderColor: '#555061',
    borderWidth: 1,
    color: '#2e2a2a',
    fontWeight: 'bold',
    backgroundColor: '#fff',
    textAlignVertical: 'bottom',
    fontSize: 13,
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    paddingBottom: 5,
  },
});

export default styles;
