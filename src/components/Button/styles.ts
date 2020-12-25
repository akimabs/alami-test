import {StyleSheet} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {colors, sizes} from '../../themes/';

const styles = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
    height: heightPercentageToDP(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.radiusMedium,
    overflow: 'hidden',
  },
  dark: {
    backgroundColor: colors.danger,
    height: heightPercentageToDP(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.radiusMedium,
    overflow: 'hidden',
  },
  success: {
    backgroundColor: colors.success,
    height: heightPercentageToDP(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.radiusMedium,
    overflow: 'hidden',
  },
  light: {
    backgroundColor: colors.primary + 30,
    paddingVertical: 15,
    borderRadius: sizes.radiusMedium,
    alignItems: 'center',
  },
  textLight: {
    color: colors.primary,
    fontFamily: 'Poppins-SemiBold',
  },
  textDark: {
    color: colors.white,
    fontFamily: 'Poppins-SemiBold',
  },
  textPrimary: {
    color: colors.white,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default styles;
