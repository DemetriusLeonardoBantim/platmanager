import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ButtonProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import colors from '../styles/colors';
import {SvgFromUri} from 'react-native-svg';

interface PlantProps extends TouchableOpacityProps {
  data: {
    name: string;
    photo: string;
  };
}

export function PlantCardPrimary({data, ...rest}: PlantProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <SvgFromUri uri={data.photo} width={70} height={70} />
      <Text style={styles.text}>{data.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '45%',
    backgroundColor: colors.shape,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    margin: 10,
  },
  text: {
    color: colors.green_dark,
    margin: 16,
  },
});
