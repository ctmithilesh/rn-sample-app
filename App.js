import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Navigation from './components/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DemoCard from './components/demo-card';
import ProductScreen from './screens/ProductScreen';
import CounterScreen from './screens/CounterScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-paper';
import WelcomeStack from './navigators/WelcomeStack';


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <WelcomeStack />
    </NavigationContainer>


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
