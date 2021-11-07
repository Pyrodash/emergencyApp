import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import React, { useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import { useFonts } from 'expo-font'
import { Roboto_500Medium } from '@expo-google-fonts/roboto'
import {
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold,
} from '@expo-google-fonts/roboto-condensed'
import { Raleway_700Bold } from '@expo-google-fonts/raleway'
import SplashScreen from './components/SplashScreen'
import { Navigation } from './navigation'
import * as Location from 'expo-location'

export default function App() {
    const [fontsLoaded] = useFonts({
        Roboto_500Medium,
        RobotoCondensed_400Regular,
        RobotoCondensed_700Bold,
        Raleway_700Bold,
    })

    useEffect(() => {
        async function requestLocationPerm() {
            const { status } =
                await Location.requestForegroundPermissionsAsync()

            if (status !== 'granted') {
                return
            }
        }

        requestLocationPerm().catch(console.error)
    }, [])

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
