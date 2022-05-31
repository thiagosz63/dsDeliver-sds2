import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/header";
import Home from "../views/home";
import OrderDetail from "../views/orderDetail";
import Orders from "../views/orders";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Header/>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Orders" component={Orders} />
                <Stack.Screen name="OrderDetail" component={OrderDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}