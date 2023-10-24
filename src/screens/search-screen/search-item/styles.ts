import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  itemWrapper: {
    width: '45%',
    borderWidth: 0.5,
    borderColor: '#afaeae',
    margin: 5,
    padding: 5,
  },
  image: {
    width: '100%',
    height: wp(55),
    alignSelf: 'center',
    flex: 1,
  },
  textWrapper: {
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {fontWeight: 'bold'},
  price: {fontWeight: 'bold', marginTop: 20},
});
