import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import {colors} from '../../themes';

const styles = StyleSheet.create({
  default: {
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
    height: heightPercentageToDP(13.5),
    paddingTop: heightPercentageToDP(3),
    backgroundColor: colors.primary,
    borderBottomRightRadius: heightPercentageToDP(5),
  },
  textHeader: {
    color: colors.primary,
    paddingVertical: 12,
    width: widthPercentageToDP(80),
    fontFamily: 'Poppins-SemiBold',
  },
  backButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    paddingHorizontal: 15,
  },
  logo: {
    height: 30,
    width: 74,
    resizeMode: 'contain',
    marginBottom: 5,
  },
});

export default styles;
