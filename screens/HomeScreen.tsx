import React from 'react'
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import EmergencyIcon from '../assets/3064330.png'
import { HomeProps } from '../types'

export default function HomeScreen({ navigation }: HomeProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>report an emergency</Text>
            <View style={[styles.gradient, styles.gradient1]}>
                <View style={[styles.gradient, styles.gradient2]}>
                    <TouchableOpacity
                        style={styles.emergencyBtn}
                        onPress={() => navigation.navigate('Report')}
                    >
                        <Image
                            source={EmergencyIcon}
                            style={styles.emergencyIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        backgroundColor: '#F46666',
    },
    title: {
        color: '#FFD2D2',
        marginBottom: 50,
        fontSize: 28,
        fontFamily: 'RobotoCondensed_400Regular',
        //fontWeight: '400',
        /* textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: {
            width: -1,
            height: 1,
        },
        textShadowRadius: 10, */
    },
    emergencyBtn: {
        backgroundColor: '#EE6F6F',
        width: 180,
        height: 180,
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    emergencyIcon: {
        /* flex: 1,
        width: '100%',
        height: undefined, */
        width: 90,
        height: 90,
    },
    emergencyTxt: {
        color: '#FFFFFF',
        fontSize: 54,
        fontFamily: 'Raleway_700Bold',
    },
    gradient: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradient1: {
        width: 300,
        height: 300,
        backgroundColor: 'rgba(255, 235, 235, 0.2)',
        borderRadius: 150,
    },
    gradient2: {
        width: 240,
        height: 240,
        backgroundColor: 'rgba(255, 235, 235, 0.3)',
        borderRadius: 120,
    },
})
