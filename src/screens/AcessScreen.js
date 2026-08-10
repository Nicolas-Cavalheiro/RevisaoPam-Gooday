import { StyleSheet, Image, Text, View } from 'react-native';
import Button from '../components/Button'

const AcessScreen = ({ navigation }) => {
    return(
        <View style = {styles.container}>
            <Image source = {require('../../images/imagens/casual_dog.png')} style = {styles.imagem}/>
            <Text style = {styles.textoGrande}>Ótimo Dia!</Text>
            <Text style = {styles.textoPequeno}>Como deseja acessar?</Text>
            <Button 
                style = {styles.botao}
                texto = "Como deseja acessar?"
                imagem = {require('../../images/imagens/Google.png')}
                googleStyle = {styles.googleStyle}
                textStyle = {styles.textStyle}
                onPress={() => navigation.navigate('login')}
            />
            <Button
                style = {styles.botao2}
                texto = "Outras opções"
                textStyle = {styles.textStyle2}
                onPress = {() => navigation.navigate('sign')}
            />
        </View>
    )
};


export default AcessScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoGrande: {
        fontSize: 40,
        color: '#2F414F'
    },
    textoPequeno: {
        fontSize: 20,
        color: '#2F414F'
    },
    imagem: {
        width: 300,
        height: 250,
        margin: 20,
    },
    botao: {
        width: 250,
        height: 50,
        backgroundColor: '#00C16A',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        margin: 10,
    },
    botao2:{
        width: 250,
        height: 50,
        borderColor: '#00C16A',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    googleStyle: {
        width: 35,
        height: 35,
        backgroundColor: '#FFFFFF',
        borderRadius: 3,
        left: 8,
        position: 'absolute'
    },
    textStyle: {
        color: '#FFFFFF',
    },
    textStyle2: {
        color: '#2F414F'
    }
})
