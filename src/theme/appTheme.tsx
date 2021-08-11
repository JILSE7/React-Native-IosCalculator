import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
        paddingVertical: 10
    },
    calculadoraContainer : {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    texto : {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10
        
    },
    resultadoPequeño : {
        fontSize: 40,
        color: 'rgba(255 ,255,255,0.5)',
        textAlign: 'right'
    },
    boton: {
        backgroundColor: "#2d2d2d",
        height: 80,
        width: 80,
        borderRadius: 100,
        alignItems:"center",
        justifyContent: 'center',
        marginHorizontal: 10
    },
    botonTexto: {
        fontSize: 35,
        fontWeight:"300",
        color: "white"
    },
    filaBotones : {
        flexDirection:"row",
        justifyContent:'center',
        marginBottom: 18,
        paddingHorizontal: 10
        
    }
})