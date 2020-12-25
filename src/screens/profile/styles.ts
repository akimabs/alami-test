import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {colors, sizes} from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  imageCard: {
    width: widthPercentageToDP(80),
    alignSelf: 'center',
    backgroundColor: colors.primary + 90,
    borderRadius: sizes.radiusLarge,
    overflow: 'hidden',
    marginTop: heightPercentageToDP(10),
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
  },
  image: {
    position: 'absolute',
  },
  containerBiodata: {
    width: widthPercentageToDP(90),
    paddingVertical: 20,
    backgroundColor: colors.white + 70,
    borderRadius: sizes.radiusSmall,
    alignSelf: 'center',
    marginTop: 20,
    padding: 10,
  },
  dataLeft: {
    width: widthPercentageToDP(20),
  },
  dataRight: {
    width: widthPercentageToDP(70),
  },
  containerData: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  buttonSignout: {
    marginTop: 20,
  },
  imageProfile: {
    height: heightPercentageToDP(10),
    width: heightPercentageToDP(10),
    borderRadius: heightPercentageToDP(10 / 2),
    borderWidth: 2,
    borderColor: 'grey',
    backgroundColor: colors.gray3,
  },
});

export default styles;
