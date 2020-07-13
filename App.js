import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigator from './Navigator';
import {Provider as PaperProvider} from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <Navigator />
      <StatusBar style="auto" />
    </PaperProvider>
  );
};
