import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../styles/colors';
import Eu from '../assets/eu.jpeg';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Header() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user');
      setUserName(user || '');
    }
    loadStorageUserName();
  }, []);

  return (
    <View style={style.container}>
      <View>
        <Text style={style.greeting}>Ola,</Text>
        <Text style={style.userName}>{userName}</Text>
      </View>

      <Image source={Eu} style={style.image} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    lineHeight: 40,
  },
});
