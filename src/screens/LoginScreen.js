import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import Button from '../components/Button'
import React, { useState } from 'react';
import { Checkbox } from 'expo-checkbox';

const LoginScreen = ({ navigation }) => {
    const [isChecked, setChecked] = useState(false);

    return (
        <View style = {styles.container}>
            <TouchableOpacity style = {{width: 250, alignSelf: 'center', marginTop: 30,}} onPress = {() => navigation.goBack()}>
                <Image source = {require('../../images/setaVerde.png')}/>
            </TouchableOpacity>
            <View style = {styles.containerTitulo}>
            <Text style = {[styles.texto, {fontSize: 40}]}>Acesse</Text>
            <Text style = {[styles.texto, {fontSize: 20}]}>com E-mail e senha</Text>
            </View>

            <View style = {styles.containerInput}>
            <Text style = {[styles.texto, {fontSize: 15}]}>E-mail</Text>
            <TextInput
            placeholderTextColor = '#2F414F'
            placeholder = "Digite seu E-mail"
            style = {styles.input}
            />
            <Text style = {[styles.texto, {fontSize: 15, marginTop: 10}]}>Senha</Text>
            <View style = {styles.olho}>
            <TextInput
            placeholderTextColor = '#2F414F'
            placeholder = "Digite sua senha"
            secureTextEntry = {true}
            style = {styles.input}
            />
            <Image source = {require('../../images/olho.png')} style = {{position: 'absolute', marginLeft: 200}}/>
            </View>
            <View style = {styles.containerCheckbox}>
            <Checkbox
                value = {isChecked}
                onValueChange = {setChecked}
                color = {isChecked ? '#00C16A' : undefined}
            />
            <Text style = {{color: '#2F414F', fontSize: 12,margin: 15}}>Lembrar senha</Text>
            <Text style = {{color: '#2F414F', fontSize: 12, marginLeft: 'auto'}}>Esqueci minha senha</Text>
            </View>
            </View>

            <View style = {styles.containerBotao}>
            <Button
            texto = "Acessar"
            style = {styles.acessar}
            textStyle = {styles.textoAcessar}
            />
            <Button
            texto = "Cadastrar"
            style = {styles.cadastrar}
            textStyle = {styles.textoCadastrar}
            onPress = {() => navigation.navigate('sign')}
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
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    acessar: {
        width: 125,
        height: 50,
        backgroundColor: '#00C16A',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        marginRight: 5,
    },
    textoAcessar: {
        color: '#FFFFFF'
    },
    cadastrar: {
        borderColor: '#00C16A',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        width: 125,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        marginLeft: 5,
    },
    input: {
        width: 250,
        height: 50,
        backgroundColor: '#E4E4F4',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    containerTitulo: {
        alignItems: 'center',
        margin: 15,
    },
    texto: {
        color: '#2F414F',
        width: 250, 
        textAlign: 'left',
    },
    containerInput: {
        alignItems: 'center', 
        margin: 20,
    },
    olho: {
        width: 250, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    containerCheckbox: {
        flexDirection: 'row', 
        alignItems: 'center',
        width: 250,
    },
    containerBotao: {
        flexDirection:'row', 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    containerLinha: {
        alignItems: 'center', 
        marginTop: 70, 
        flexDirection: 'row', 
        justifyContent: 'center',
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