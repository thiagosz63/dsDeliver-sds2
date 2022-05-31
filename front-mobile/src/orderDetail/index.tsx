import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View, TouchableOpacity, Alert,Linking } from 'react-native';
import { confirmDelivery } from '../api';
import OrderCard from '../orders/orderCard';
import { Order } from '../orders/types';

type Props = {
    route: {
        params: {
            order: Order
        }
    }
}
export default function OrderDetail({ route }: Props) {
    const { order } = route.params;
    const navigation = useNavigation<any>();

    function handleOnCancel() {
        navigation.goBack();
    }
    function handleConfirmDelivery() {
        confirmDelivery(order.id)
        .then(() => {
            Alert.alert(`Pedido ${order.id} confirmado com sucesso!`);
            handleOnCancel();
        })
        .catch(() => {
            Alert.alert(`Houve um erro ao confirmar o Pedido ${order.id}`);
        })
    }
    function handleStartNavegation() {
        Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`)
    }

    return (
        <View style={styles.container}>
            <OrderCard order={order}/>

            <TouchableOpacity 
            style={styles.button}
             onPress={handleStartNavegation}>
                <Text style={styles.buttonText}>Iniciar Navegação</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.button}
             onPress={handleConfirmDelivery}>
                <Text style={styles.buttonText}>Confirmar Entrega</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.button}
             onPress={handleOnCancel}>
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%'
    },
    button: {
        backgroundColor: '#DA5C5C',
        flexDirection: 'row',
        borderRadius: 10,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        letterSpacing: -0.24,
        fontFamily: 'OpenSans_700Bold'
    }
});
