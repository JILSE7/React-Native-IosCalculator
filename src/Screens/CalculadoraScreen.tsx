import React from 'react';
import {  Text, View } from 'react-native'
import BotonCalc from '../Components/BotonCalc';
import useCalculator from '../Hooks/useCalculator';
import { styles } from '../theme/appTheme';


const fila2 =  ["7", "8", "9"],
            fila3 = ["4", "5", "6"],
            fila4 = ["1", "2", "3"],
            fila5 = ['0', '.'];

const CalculadoraScreen = () => {

    const {numero, numeroAnterior, limpiar,positivoNegativo, del, armarNumero, btnDividir, btnRestar, btnSumar, btnMultiplicar, calcular} = useCalculator()

    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0')  &&  <Text style={styles.resultadoPequeño}>{numeroAnterior}</Text>
            }
            <Text style={styles.texto} numberOfLines={1} adjustsFontSizeToFit >{numero}</Text>

            <View style = {styles.filaBotones}>
                        <BotonCalc simbol={"C"} color={"#9b9b9b" } accion={ limpiar } />
                        <BotonCalc simbol={"+/-"} color={"#9b9b9b" } accion={ positivoNegativo } />
                        <BotonCalc simbol={"del"} color={"#9b9b9b" } accion={ del } />
                        <BotonCalc simbol={"/"} color={ "#ff9427" } accion={ btnDividir } />
            </View>
            <View style = {styles.filaBotones}>
                        {fila2.map((numero, i) => (<BotonCalc simbol={numero} color={"#2d2d2d" } accion={ armarNumero } key={numero+i} />))}
                        <BotonCalc simbol={"X"} color={ "#ff9427" } accion={ btnMultiplicar } />
            </View>
            <View style = {styles.filaBotones}>
                        {fila3.map((numero, i) => (<BotonCalc simbol={numero} color={"#2d2d2d" } accion={ armarNumero } key={numero+i} />))}
                        <BotonCalc simbol={"-"} color={ "#ff9427" } accion={ btnRestar } />
            </View>
            <View style = {styles.filaBotones}>
                        {fila4.map((numero, i) => (<BotonCalc simbol={numero} color={"#2d2d2d" } accion={ armarNumero } key={numero+i} />))}
                        <BotonCalc simbol={"+"} color={ "#ff9427" } accion={ btnSumar } />
            </View>
       
            <View style = {styles.filaBotones}>
                        {fila5.map((numero, i) => (<BotonCalc simbol={numero} color={"#2d2d2d" } accion={ armarNumero } ancho={i==0 ? true: false} key={i+2} />))}
                        <BotonCalc simbol={"="} color={"#2d2d2d" } accion={ calcular } />
            </View>
        </View>
    )
}



export default CalculadoraScreen;
