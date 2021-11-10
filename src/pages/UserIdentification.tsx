import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  Alert,
} from 'react-native';
import colors from '../styles/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ButtonLogin} from '../components/ButtonLogin';
import {useNavigation} from '@react-navigation/core';

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [name, setName] = useState<string>();
  const navigation = useNavigation();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  async function handleStart() {
    if (!name) {
      return Alert.alert('Me diz como chamar você 😿');
    }
    await AsyncStorage.setItem('@plantmanager:user', name);

    navigation.navigate('Confirmation', {
      title: 'Prontinho',
      subtitle:
        'Agora vamos comecar a cuidar das suas plantinhas com muito cuidado.',
      buttonTitle: 'Comecar',
      icon: 'smile',
      nextScreen: 'PlantSelect',
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <Text style={styles.title}>Como podemos {'\n'}chamar você?</Text>
              <Text style={styles.emoji}>{isFilled ? '😄' : '😢'}</Text>
              <TextInput
                style={[
                  styles.input,
                  (isFilled || isFocused) && {borderColor: colors.green},
                ]}
                placeholder="Digite seu nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />
              <View style={styles.footer}>
                <ButtonLogin title="Confirmar" onPress={handleStart} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center',
    width: '100%',
  },
  emoji: {
    fontSize: 44,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    fontSize: 18,
    width: '100%',
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: colors.heading,
  },
  footer: {
    width: '100%',
    marginTop: 40,
  },
});
