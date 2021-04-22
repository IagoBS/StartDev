import React from 'react';
import './config/Reactotron';
import type {Node} from 'react';
import Routes from './routes';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1bff85" />
      <Routes />
    </>
  );
};

export default App;
