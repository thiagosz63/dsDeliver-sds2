import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../header";
import Home from "../home";
import OrderDetail from "../orderDetail";
import Orders from "../orders";

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