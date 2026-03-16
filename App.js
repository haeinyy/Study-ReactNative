/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
import {SafeAreaView, Button} from 'react-native';
// import Greeting from './components/Greeting';
import Box from './components/Box';

const App = () => {
  // const name = 'JSX';
  const [visible, setVisible] = useState(true);
  const onPress = () => {
    setVisible(!visible);
  };
  return (
    <SafeAreaView>
      <Button title="토글" onPress={onPress} />
      {visible ? <Box rounded={true} size="large" color="blue" /> : null}
    </SafeAreaView>
  );
};

export default App;
