import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <Text>Loading</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
