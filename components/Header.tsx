import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfilePicture from '../assets/motfd.jpeg'

export default function Header() {
    return (
        <LinearGradient
            colors={['#3A1C71', 'rgba(244,102,102,1)']}
            locations={[0, 1]}
            start={[0, 0]}
            end={[1, 0]}
            style={styles.background}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.text}>hackHer</Text>
                    <Image source={ProfilePicture} style={styles.avatar} />
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    background: {
        overflow: 'visible',
        zIndex: 9999,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    container: {
        display: 'flex',
        height: 120,
        marginBottom: 0,
        paddingBottom: 0,
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    text: {
        color: '#FFF',
        fontSize: 28,
        fontFamily: 'Raleway_700Bold',
        paddingTop: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {
            width: -1,
            height: 1,
        },
        textShadowRadius: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
})
