import { StyleSheet, Image, View } from 'react-native';
import React, { useEffect } from 'react';


const LoadingScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('acess');
        }, 3000);


        return () => clearTimeout(timer);
    }, [navigation]);
    return (
        <View style = {styles.container}>
            <Image source = {require('../../images/logotipo.png')}></Image>
        </View>
    )
};


export default LoadingScreen;


const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#00C16A',
    alignItems: 'center',
    justifyContent: 'center',
    },
});
