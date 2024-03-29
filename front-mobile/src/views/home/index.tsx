import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Home() {
    const navigation = useNavigation<any>();

    const handleOnPress = () => {
        navigation.navigate('Orders')
    }
    return (
        <>
            <View style={styles.container}>
                <Image source={require('../../assets/deliveryman.png')} />
                <Text style={styles.title}>
                    Acompanhe os Pedidos e{'\n'}Entregue no Prazo
                </Text>
                <Text style={styles.subTitle}>
                    Receba todos os pedidos do seu{'\n'}restaurante na palma da sua mão
                </Text>
            </View>

            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleOnPress}
                >
                    <Text style={styles.buttonText}>VER PEDIDOS</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        alignItems: 'center'
    },
    title: {
        color: '#263238',
        fontSize: 26,
        lineHeight: 35,
        fontWeight: 'bold',
        marginTop: 31,
        textAlign: 'center'
    },
    subTitle: {
        color: '#9E9E9E',
        fontSize: 16,
        marginTop: 15,
        lineHeight: 22,
        textAlign: 'center'
    },
    footer: {
        marginTop: '5%',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#DA5C5C',
        flexDirection: 'row',
        borderRadius: 10
    },
    buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        letterSpacing: -0.24
    },
});
