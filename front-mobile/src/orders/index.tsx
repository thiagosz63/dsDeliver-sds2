import { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Alert, TouchableWithoutFeedback, Text } from "react-native";
import { fetchOrders } from "../api";
import OrderCard from "./orderCard";
import { Order } from "./types";

export default function Orders() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isloading, setIsloading] = useState(false);

    useEffect(() => {
        setIsloading(true);
        fetchOrders()
            .then(response => setOrders(response.data))
            .catch(() => Alert.alert("Houve um erro ao listar os Pedidos"))
            .finally(() => setIsloading(false))
    }, []);

    return (
        <ScrollView style={styles.container}>
            {isloading ? (
                <Text>Buscando Pedidos.....</Text>
            ) : (
                orders.map(order => (
                    <TouchableWithoutFeedback key={order.id}>
                        <OrderCard order={order} />
                    </TouchableWithoutFeedback>
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