import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignContent: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#e4e8e8',
    paddingHorizontal: 5,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRightWidth: 0,
  },
  button: {
    backgroundColor: '#4bc9c9',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 0.5,
    borderColor: '#4bc9c9',
  },
});
