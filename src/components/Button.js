import { View, TouchableOpacity, Text, Image } from 'react-native';

const Button = (props) => {
return (
     <View>
        <TouchableOpacity 
        style = {props.style}
        onPress = {props.onPress}
        >
        <Image
            source = {props.imagem}
            style = {props.googleStyle}
        />
            <Text style = {props.textStyle}>{props.texto}</Text>
        </TouchableOpacity>
     </View>   
    );
}

export default Button;