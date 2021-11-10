import React from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';
import colors from '../styles/colors';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {SvgFromUri} from 'react-native-svg';
import Icon from 'react-native-vector-icons/Feather';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
}

export function PlantCardSecondary({data, handleRemove, ...rest}: PlantProps) {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton style={styles.buttonRemove} onPress={handleRemove}>
              <Icon size={32} color={colors.white} name="trash" />
            </RectButton>
          </View>
        </Animated.View>
      )}>
      <RectButton style={styles.container} {...rest}>
        <SvgFromUri uri={data.photo} width={50} height={50} />
        <Text style={styles.text}>{data.name}</Text>
        <View style={styles.details}>
          <Text style={styles.timeLabel}>Regar as</Text>
          <Text style={styles.time}>{data.hour}</Text>
        </View>
      </RectButton>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.shape,
    marginVertical: 5,
  },
  text: {
    flex: 1,
    marginLeft: 10,
    fontSize: 17,
  },
  details: {
    alignItems: 'flex-end',
  },
  timeLabel: {
    marginTop: 5,
    fontSize: 16,
    color: colors.blue_light,
  },
  time: {
    marginTop: 5,
    fontSize: 16,
    color: colors.body_dark,
  },
  buttonRemove: {
    width: 100,
    height: 85,
    backgroundColor: colors.red,
    marginTop: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    right: 15,
    paddingLeft: 10,
  },
});
