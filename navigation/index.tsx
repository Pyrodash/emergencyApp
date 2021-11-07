import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { useRecoilState } from 'recoil'
import { userState } from '../store/store'
import HomeScreen from '../screens/HomeScreen'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

export function Navigation() {
    const [user] = useRecoilState(userState)

    const screens = user?.isParamedic ? (
        <></>
    ) : (
        <>
            <Stack.Screen name="Home" component={HomeScreen} />
        </>
    )

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ header: Header }}>
                {screens}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
