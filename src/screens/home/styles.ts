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
  headerContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  imageProfile: {
    height: heightPercentageToDP(5),
    width: heightPercentageToDP(5),
    borderRadius: heightPercentageToDP(5 / 2),
    borderWidth: 2,
    borderColor: 'grey',
    backgroundColor: colors.gray3,
  },
  dashed: {
    height: 1,
    width: '100%',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: colors.primary,
    borderStyle: 'dashed',
    zIndex: 0,
  },
  dashed2: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: 1,
    backgroundColor: 'white',
    zIndex: 1,
  },
  buttonSearch: {
    width: widthPercentageToDP(90),
    height: heightPercentageToDP(6),
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: colors.gray3,
    borderRadius: sizes.radiusSmall,
    borderWidth: 0.2,
    borderColor: 'grey',
    overflow: 'hidden',
  },
  textSearch: {
    marginLeft: 20,
    color: colors.gray1,
  },
  postLoading: {
    height: heightPercentageToDP(10),
    width: widthPercentageToDP(90),
    backgroundColor: colors.gray3,
    marginHorizontal: 20,
    overflow: 'hidden',
    borderRadius: sizes.radiusMedium,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContainer: {
    zIndex: -1000,
    alignSelf: 'center',
    backgroundColor: colors.backgroundColor,
  },
  listHeader: {
    paddingTop: heightPercentageToDP(10),
  },
  animateHeader: {
    zIndex: -100,
    width: widthPercentageToDP(100),
    position: 'absolute',
    top: heightPercentageToDP(12.3),
    backgroundColor: colors.backgroundColor,
    paddingBottom: 20,
  },
  containerImage: {
    height: heightPercentageToDP(10),
    width: widthPercentageToDP(15),
    backgroundColor: colors.warning,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 0,
    paddingLeft: 10,
    paddingTop: 10,
  },
  bodyContainer: {
    width: widthPercentageToDP(70),
    paddingLeft: 10,
  },
});

export default styles;
