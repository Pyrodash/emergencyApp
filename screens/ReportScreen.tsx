import * as Location from 'expo-location'
import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    ViewStyle,
} from 'react-native'
import { EmergencyTypeEnum, ReportProps } from '../types'

function LocationInfo() {
    const [location, setLocation] = useState<Location.LocationGeocodedAddress>()

    useEffect(() => {
        async function getLocation() {
            const { coords } = await Location.getCurrentPositionAsync({})
            const [info] = await Location.reverseGeocodeAsync(coords)

            setLocation(info)
        }

        getLocation().catch(console.error)
    }, [])

    console.log(location)

    return (
        <View style={styles.locationContainer}>
            <View style={styles.locationHeader}>
                <Text style={styles.locationHeaderTxt}>Your location</Text>
            </View>
            <Text style={styles.locationTxt}>{location?.street}</Text>
            <Text style={styles.locationTxt}>{`${location?.city || ''} ${
                location?.postalCode || ''
            }`}</Text>
        </View>
    )
}

function CancelButton(props: TouchableOpacityProps) {
    return (
        <TouchableOpacity style={styles.cancelBtn} {...props}>
            <Text style={styles.cancelTxt}>Cancel</Text>
        </TouchableOpacity>
    )
}

interface EmergencyTypeProps {
    type: EmergencyTypeEnum
    label: string
    icon: JSX.Element
    isActive: boolean
}

export function EmergencyType(props: EmergencyTypeProps) {
    const style: ViewStyle[] = [styles.emergencyType]

    if (props.isActive) {
        style.push(styles.emergencyTypeActive)
    }

    return (
        <View style={style}>
            {props.icon}
            <Text>{props.label}</Text>
        </View>
    )
}

interface EmergencyTypeSelectorProps {
    activeType: EmergencyTypeEnum
}

/* export function EmergencyTypeSelector(props: EmergencyTypeSelectorProps) {
    return (
        <View style={styles.emergencyTypeContainer}>
            <Text style={styles.emergencyTypeTitle}>Type of Emergency</Text>
            <View style={styles.emergencyTypes}>
                <EmergencyType type={EmergencyTypeEnum.Accident} label="Accident" icon={} />
                <EmergencyType type={EmergencyTypeEnum.HeartAttack} label="Heart Attack" icon={} />
                <EmergencyType type={EmergencyTypeEnum.Crime} label="Crime" icon={} />
            </View>
        </View>
    )
} */

export default function ReportScreen({ navigation }: ReportProps) {
    const [timeLeft, setTimeLeft] = useState(5)
    const [timerActive, setTimerActive] = useState(true)

    const [emergencyType, setEmergencyType] = useState(
        EmergencyTypeEnum.Accident
    )

    useEffect(() => {
        if (!timerActive) {
            return
        }

        if (timeLeft > 0) {
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1)
            }, 1000)

            return () => clearTimeout(timer)
        } else {
            setTimerActive(false)
            // todo: send request
        }
    }, [timeLeft, timerActive])

    const paddedTime = String(timeLeft).padStart(2, '0')

    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <Text style={styles.text}>
                    The call will start automatically in:
                </Text>
                <Text style={styles.timer}>{paddedTime}</Text>
                <LocationInfo />
                <CancelButton onPress={() => navigation.goBack()} />
            </View>
            {/* <EmergencyTypeSelector activeType={emergencyType} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F46666',
    },
    modal: {
        backgroundColor: '#FFFFFf',
        width: '85%',
        height: '55%',
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    text: {
        fontSize: 18,
        fontFamily: 'Roboto_500Medium',
        marginBottom: 20,
    },
    timer: {
        fontSize: 60,
        fontFamily: 'Roboto_500Medium',
        color: '#F93A3A',
        marginBottom: 30,
    },
    locationContainer: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    locationHeader: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginBottom: 14,
    },
    locationHeaderTxt: {
        fontSize: 24,
    },
    locationTxt: {
        color: 'rgb(180, 180, 180)',
    },
    cancelBtn: {
        backgroundColor: '#F46666',
        width: '50%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    cancelTxt: {
        color: '#F6C4C4',
        fontSize: 18,
    },
    emergencyTypeContainer: {
        marginTop: 50,
    },
    emergencyTypeTitle: {
        textTransform: 'uppercase',
        fontSize: 24,
        fontFamily: 'RobotoCondensed_700Bold',
        color: '#F6C4C4',
    },
    emergencyTypes: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    emergencyType: {
        width: 128,
        height: 128,
        borderRadius: 64,
        backgroundColor: '#fff',
    },
    emergencyTypeActive: {},
})
