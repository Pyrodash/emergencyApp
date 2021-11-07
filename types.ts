import {
    NativeStackHeaderProps,
    NativeStackScreenProps,
} from '@react-navigation/native-stack'

export interface User {
    isParamedic: boolean
}

export enum EmergencyTypeEnum {
    Accident,
    HeartAttack,
    Crime,
}

export type RootStackParamList = {
    Home: undefined
    Report: undefined
}

export type HeaderProps = NativeStackHeaderProps
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type ReportProps = NativeStackScreenProps<RootStackParamList, 'Report'>
