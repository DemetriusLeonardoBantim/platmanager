import React from 'react';
import {StyleSheet, Text, ButtonProps, TouchableOpacity} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import colors from '../styles/colors';

interface EnviromentButtonProps extends ButtonProps {
  title: string;
  active?: boolean;
}

export function EnviromentButton({
  title,
  active = false,
  ...rest
}: EnviromentButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, active && styles.containerActive]}
      {...rest}>
      <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    height: 40,
    width: 76,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 5,
  },
  containerActive: {
    color: colors.green,
    backgroundColor: colors.green_light,
  },
  text: {
    color: colors.heading,
  },
  textActive: {
    color: colors.green_dark,
  },
});
