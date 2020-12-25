import React from 'react';
import {View, StyleSheet} from 'react-native';
import Toast from 'react-native-toast-message';

import {Header} from '../components/index';
import {colors} from '../themes';

type PropsHoc = {
  title?: string;
  backAction?: boolean;
  withHeader?: boolean;
};

const CustomView = (
  WrappedComponent: React.FunctionComponent,
  {title, backAction = true, withHeader = true}: PropsHoc,
) => {
  return (props: any) => (
    <View style={styles.container}>
      {withHeader && (
        <Header backAction={backAction} title={title} titleColor="white" />
      )}
      <WrappedComponent {...props} />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

export {CustomView};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});
