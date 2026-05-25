import { useNavigation } from '@react-navigation/native';
import React, {useState, useContext} from 'react';
import { KeyboradAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WriteHeader from '../components/WriteHeader';
import WriteEditor from '../components/WriteEditor';
import LogContext from '../context/LogContext';

function WriteScreen() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { onCreate } = useContext(LogContext);
  const navigation = useNavigation();

  const onSave = () => {
    const date = new Date().toISOString();
    onCreate(title, body, date);
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboradAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <WriteHeader onSave={onSave} />
        <WriteEditor
          title={title}
          content={body}
          onChangeTitle={setTitle}
          onChangeContent={setBody}
        />
      </KeyboradAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoidingView: { flex: 1 },
});

export default WriteScreen;
