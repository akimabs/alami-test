import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {colors, sizes} from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  postLoading: {
    paddingVertical: 20,
    width: widthPercentageToDP(100),
    backgroundColor: colors.gray3,
    overflow: 'hidden',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerImage: {
    height: heightPercentageToDP(10),
    width: widthPercentageToDP(15),
    backgroundColor: colors.warning,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    paddingLeft: 10,
    paddingTop: 10,
  },
  imageProfile: {
    height: heightPercentageToDP(5),
    width: heightPercentageToDP(5),
    borderRadius: heightPercentageToDP(5 / 2),
    borderWidth: 2,
    borderColor: 'grey',
    backgroundColor: colors.gray3,
  },
  bodyContainer: {
    width: widthPercentageToDP(80),
    paddingLeft: 10,
  },
  texttitle: {
    marginBottom: 20,
    textAlign: 'justify',
  },
  textSubtitle: {
    textAlign: 'justify',
  },
  listContainer: {
    zIndex: -1000,
    alignSelf: 'center',
    backgroundColor: colors.backgroundColor,
  },
  textComment: {
    paddingTop: 0,
    padding: 20,
  },
  postComment: {
    marginBottom: 20,
  },

  //   Search
  containerSearch: {
    width: widthPercentageToDP(90),
    alignSelf: 'center',
    paddingVertical: 20,
  },
  postSearch: {
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
  listHeader: {
    paddingTop: heightPercentageToDP(5),
  },
  circleSearch: {
    borderBottomRightRadius: 0,
  },
  bodyContainerSearch: {
    width: widthPercentageToDP(70),
  },
});

export default styles;
