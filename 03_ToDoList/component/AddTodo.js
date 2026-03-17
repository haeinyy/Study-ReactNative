import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';

function AddTodo() {
  const [text, setText] = useState('');

  const onPress = () => {
    setText('');
    Keyboard.dismiss();
  };

  const button = (
    <View style={styles.buttonStyle}>
      <Image
        source={require('../assets/icons/add_white/add_white.png')}
      />
    </View>
  );

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        placeholder="할 일을 입력하세요"
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress}
        retunKeyType="done"
      />
      {Platform.select({
        ios: <TouchableOpacity activeOpacity={0.5} onPress={onPress}>{button}</TouchableOpacity>,
        android: (
        <View style={styles.circleWrapper}>
          <TouchableNativeFeedback onPress={onPress}>{button}</TouchableNativeFeedback>
        </View>
        ),
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#bdbdbd',
    justifyContent: 'center',
  },
  input: {
    paddingHorizontal: 8,
    fontSize: 16,
  },
  buttonStyle: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26a69a',
    borderRadius: 24,
  },
  circleWrapper: {
    overflow: 'hidden',
    borderRadius: 24,
  },
});

export default AddTodo;