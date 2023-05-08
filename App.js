import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';


import Routes from './src/router';
import { SafeAreaView } from 'react-native-safe-area-context';
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  let [loadedFont] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold
});

const onLayoutRootView = useCallback(async () => {
  if (loadedFont) {
    //This tells the splash screen to hide immediately
    await SplashScreen.hideAsync();
  }
}, [loadedFont]);

if (!loadedFont) return null;



return (
  <>
 
  <StatusBar style='light' backgroundColor='#000' translucent={false}/>
  <Routes/>
 
  </>
);

}