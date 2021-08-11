
import { useRef, useState } from 'react';


enum Operadores {
    sumar, restar, multiplicar, dividir
}

const useCalculator = () => {
    const [numero, setNumero] = useState("0")
    const [numeroAnterior, setNumeroAnterior] = useState("0");

    const operationRef = useRef<Operadores>();

    const limpiar = () =>{ 
        setNumero('0');
        setNumeroAnterior('0');
    }

    const armarNumero = (numeroTexto: string) => {
        //no aceptar 2ble punto decimal
        if(numero.includes('.') && numeroTexto==='.')return;

        if(numero.startsWith('0') || numero.startsWith('-0')){
            if(numeroTexto === '.'){//punto decimal
                setNumero(numero + numeroTexto);

            }else if(numeroTexto === '0' && numero.includes('.')){ //Evaluar quiere contruir un numero decimal
                    setNumero(numero + numeroTexto)

            }else if(numeroTexto !== '0' && !numero.includes('.')){//Empezar con otro numero que no sea cero
                setNumero(numeroTexto);    

            }else if(numeroTexto === '0' && !numero.includes('.')){
                setNumero(numero);
            }else{
                setNumero(numero + numeroTexto);    
            }
        }else{

            setNumero(numero + numeroTexto);
        };


    };

    const del = () => {
        if(numero.length === 1){
            setNumero('0');
        }else if(numero.length === 2 && numero.includes('-')){
            setNumero('0');
        }else  if(numero.length> 1){
            setNumero(numero.substring(0,numero.length-1))
        };
    };


    const cambiarNumeroAnterior = () => {
        if(numero.endsWith('.')){
            setNumeroAnterior(numero.slice(0,-1));
        }else{
            setNumeroAnterior(numero);
        }
        setNumero('0');
    };


    const btnDividir = () => {
        cambiarNumeroAnterior();
        operationRef.current = Operadores.dividir;
        console.log(operationRef.current);
    };
    const btnMultiplicar = () => {
        cambiarNumeroAnterior();
        operationRef.current = Operadores.multiplicar;
        console.log(operationRef.current);
    }
    const btnRestar = () => {
        cambiarNumeroAnterior();
        operationRef.current = Operadores.restar;
        console.log(operationRef.current);
    };

    const btnSumar = () => {
        cambiarNumeroAnterior();
        operationRef.current = Operadores.sumar;
        console.log(operationRef.current);
    };



    const positivoNegativo = () => {
        if(numero.includes('-')){
            setNumero(numero.replace('-', '')) //positivo
        }else{
            setNumero('-' + numero)//negativo
        }
    };


    const calcular = ()=> {

        if(numero === '0') return;
        const num1 = Number(numero),
                    num2 = Number(numeroAnterior);
        

        switch (operationRef.current) {
            case 0:
                setNumero( String(num2 + num1) );
                break;
            case 1:
                
                setNumero( String(num2 - num1) );
                    break;
            case 2:
                setNumero(  String(num2 * num1));
                    break;
            case 3:
                setNumero( String(num2 / num1));
                    break;
            default:
                break;
        }

        setNumeroAnterior('0');
    }
    return {
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        del,
        armarNumero,
        btnDividir,
        btnRestar,
        btnSumar,
        btnMultiplicar,
        calcular
    }
        
    
}

export default useCalculator
