import { View, StyleSheet, TextInput, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import Button from '../components/Button';

const SignScreen = ({ navigation }) => {
    return (
        <ScrollView style = {{backgroundColor: '#FFFFFF'}}>
        <View>
            <TouchableOpacity style = {{width: 250, alignSelf: 'center', marginTop: 30,}} onPress = {() => navigation.goBack()}>
                <Image source = {require('../../images/setaVerde.png')}/>
            </TouchableOpacity>
            <View style = {{alignItems: 'center', margin: 15}}>
            <Text style = {[styles.texto, {fontSize: 40}]}>Cadastre-se</Text>
            <Text style = {[styles.texto, {fontSize: 15}]}>informe seu E-mail e crie uma senha</Text>
            </View>

            <View style = {{alignItems: 'center', margin: 20}}>
                <Text style = {[styles.texto, {fontSize: 15}]}>E-mail</Text>
                <TextInput
                placeholderTextColor = '#2F414F'
                placeholder = "Digite seu E-mail"
                style = {styles.input}
                />
                <Text style = {[styles.texto, {fontSize: 15, marginTop: 10}]}>Senha</Text>

                <View style = {styles.containerOlho}>
                <TextInput
                placeholderTextColor = '#2F414F'
                placeholder = "Digite sua senha"
                secureTextEntry = {true}
                style = {styles.input}
                />
                <Image source = {require('../../images/olho.png')} style = {styles.olho}/>
                </View>

                <Text style = {[styles.texto, {fontSize: 15, marginTop: 10}]}>Repita sua senha</Text>
                <View style = {styles.containerOlho}>
                <TextInput
                placeholderTextColor = '#2F414F'
                placeholder = "Digite sua senha"
                secureTextEntry = {true}
                style = {styles.input}
                />
                <Image source = {require('../../images/olho.png')} style = {styles.olho}/>
                </View>
                
                <View>
                    <Button
                    texto = "Cadastrar"
                    style = {styles.botao}
                    textStyle = {styles.textoBotao}
                    />
                </View>

                <View style = {styles.containerLinha}>
                    <View style = {styles.linha}/>
                    <Text style = {{marginHorizontal: 5,}}>Ou continue com</Text>
                    <View style = {styles.linha}/>
                </View>

                <View style = {styles.containerImagens}>
                    <Image source = {require('../../images/imagens/Google.png')} style = {{margin: 10,}}/>
                    <Image source = {require('../../images/imagens/Facebook.png')} style = {{margin: 10,}}/>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

export default SignScreen;

const styles = StyleSheet.create({
    botao: {
        width: 250,
        height: 50,
        backgroundColor: '#00C16A',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        marginTop: 150,
    },
    input: {
        width: 250,
        height: 50,
        backgroundColor: '#E4E4F4',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    textoBotao: {
        color: '#FFFFFF',
    },
    texto: {
        color: '#2F414F', 
        width: 250, 
        textAlign: 'left',
    },
    containerOlho: {
        width: 250, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    olho: {
        position: 'absolute', 
        marginLeft: 200,
    },
    containerLinha: {
        alignItems: 'center', 
        margin: 10, 
        flexDirection: 'row',
    },
    linha: {
        height: 1, 
        width: 79, 
        backgroundColor: '#2F414F',
    },
    containerImagens: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
    },
})