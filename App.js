import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Navigation from './components/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DemoCard from './components/demo-card';
import ProductScreen from './screens/ProductScreen';
import CounterScreen from './screens/CounterScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <CounterScreen />
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
