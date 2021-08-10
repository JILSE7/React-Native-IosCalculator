import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import BotonCalc from '../Components/BotonCalc';
import { styles } from '../theme/appTheme';
const arr = ["C","+/-","del","/"];
{/* "#9b9b9b" gris normal
        #2d2d2d gris oscuro
        #ff9427 narajan
,*/}
const CalculadoraScreen = () => {
    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequeño}>1500.000</Text>
            <Text style={styles.texto}>1500.000</Text>

            <View style = {styles.filaBotones}>
                {
                    arr.map((boton, i) => (
                        <BotonCalc simbol={boton} color={(i <= 2) ? "#9b9b9b" : "#ff9427" } key={i}/>
                    ))
                }
              
            </View>

        </View>
    )
}



export default CalculadoraScreen;
