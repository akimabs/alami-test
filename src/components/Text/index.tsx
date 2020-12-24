import React from 'react';
import {Text, Dimensions} from 'react-native';
import {RFValue as fs} from 'react-native-responsive-fontsize';

import styles from './styles';

type PropsText = {
  children: any;
  color?: string;
  style?: Object;
  numberOfLines?: number;
  size?: number;
  type: 'thin' | 'regular' | 'semibold' | 'bold';
  [key: string]: any;
};

const Typography: React.FC<PropsText> = (props) => {
  const TextStyles: any[] = [
    props.type === 'thin' && styles.thin,
    props.type === 'regular' && styles.regular,
    props.type === 'semibold' && styles.semibold,
    props.type === 'bold' && styles.bold,
  ];
  const colors: object = {
      color: props.color ? props.color : '#072c5a',
    },
    {width} = Dimensions.get('window');
  const sizeText: object = {
    fontSize: props.size ? fs(props.size, width) : fs(7, width),
  };
  return (
    <Text
      {...props}
      numberOfLines={props.numberOfLines}
      ellipsizeMode="tail"
      style={[styles.default, TextStyles, colors, sizeText, props.style]}>
      {props.children}
    </Text>
  );
};

export default Typography;
