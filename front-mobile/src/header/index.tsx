import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

export default function Header() {
    const navigation = useNavigation<any>();
    return (
        <TouchableWithoutFeedback onPress={()=> navigation.navigate("Home")}>
            <View style={styles.container}>
                <Image source={require('../assets/logo.png')} />
                <Text style={styles.text}>DS Delivery</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DA5C5C',
        height: 90,
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.24,
        color: '#fff',
        marginLeft: 15,
        fontFamily: "OpenSans_700Bold"
    }
});
