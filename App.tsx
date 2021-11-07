import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import React from 'react'
import { RecoilRoot } from 'recoil'
import { useFonts } from 'expo-font'
import { Roboto_500Medium } from '@expo-google-fonts/roboto'
import { RobotoCondensed_400Regular } from '@expo-google-fonts/roboto-condensed'
import { Raleway_700Bold } from '@expo-google-fonts/raleway'
import SplashScreen from './components/SplashScreen'
import { Navigation } from './navigation'

export default function App() {
    const [fontsLoaded] = useFonts({
        Roboto_500Medium,
        RobotoCondensed_400Regular,
        Raleway_700Bold,
    })

    if (!fontsLoaded) {
        return <SplashScreen />
    } else {
        return (
            <RecoilRoot>
                <SafeAreaProvider>
                    <Navigation />
                    <StatusBar />
                </SafeAreaProvider>
            </RecoilRoot>
        )
    }
}
