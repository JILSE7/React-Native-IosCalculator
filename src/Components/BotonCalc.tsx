import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'


interface Props {
    simbol : string,
    color?: string
}
const BotonCalc = ({simbol, color} : Props) => {
    return (
        <View style={{
            ...styles.boton, 
            backgroundColor: color
            }}>
        <Text style={{...styles.botonTexto}}>
            {simbol}
        </Text>
    </View>
    )
}

export default BotonCalc
