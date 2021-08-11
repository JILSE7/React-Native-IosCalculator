import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'


interface Props {
    simbol : string,
    color?: string,
    ancho?: boolean,
    accion: (numeroTexto:string) => void
}
const BotonCalc = ({simbol, color, ancho = false, accion} : Props) => {

    const [digito, setdigito] = useState(simbol)
    
    
    return (
        <TouchableOpacity onPress={() => accion(digito)}>
            <View style={{
                ...styles.boton, 
                backgroundColor: color,
                width: (ancho) ? 180 : 80
            
                }}>
                <Text style={{...styles.botonTexto, color: (color ==="#9b9b9b")? "black" : "white"}}>
                    {simbol}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default BotonCalc
