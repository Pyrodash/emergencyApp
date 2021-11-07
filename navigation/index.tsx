import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { useRecoilState } from 'recoil'
import { userState } from '../store/store'
import HomeScreen from '../screens/HomeScreen'
import Header from '../components/Header'
import ReportScreen from '../screens/ReportScreen'
import { RootStackParamList } from '../types'

const RootStack = createNativeStackNavigator<RootStackParamList>()

export function Navigation() {
    const [user] = useRecoilState(userState)

    const screens = user?.isParamedic ? (
        <></>
    ) : (
        <>
            <RootStack.Screen name="Home" component={HomeScreen} />
            <RootStack.Screen name="Report" component={ReportScreen} />
        </>
    )

    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ header: Header }}>
                {screens}
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
