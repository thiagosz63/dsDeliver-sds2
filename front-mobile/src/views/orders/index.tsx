import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Alert, TouchableOpacity, Text } from "react-native";
import { fetchOrders } from "../../api";
import OrderCard from "../../components/orderCard";
import { Order } from "./types";

export default function Orders() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isloading, setIsloading] = useState(false);
    const navigation = useNavigation<any>();
    const isFocused = useIsFocused();

    const fetchData = () => {
        setIsloading(true);
        fetchOrders()
            .then(response => setOrders(response.data))
            .catch(() => Alert.alert("Houve um erro ao listar os Pedidos"))
            .finally(() => setIsloading(false))
    }
    useEffect(() => {
        if(isFocused){
            fetchData();
        }

    }, [isFocused]);

    const handleOnPress = (order: Order) => {
        navigation.navigate('OrderDetail', {
            order
        });
    }

    return (
        <ScrollView style={styles.container}>
            {isloading ? (
                <Text>Buscando Pedidos.....</Text>
            ) : (
                orders.map(order => (
                    <TouchableOpacity
                        key={order.id}
                        onPress={() => handleOnPress(order)}>
                        <OrderCard order={order} />
                    </TouchableOpacity>
                ))
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingRight: "5%",
        paddingLeft: "5%"
    },
});