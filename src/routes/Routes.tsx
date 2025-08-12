import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { Home } from "../screens/Home/Home";
import { Skills } from "../screens/Skills/Skills";

const {Navigator, Screen} = createBottomTabNavigator();

export function TabRoutes(){
    return (
        <Navigator>
            <Screen name="Links" component={Home} options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="link" size={30}/>
                )
            }}/>
            <Screen name="Skills" component={Skills} options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="book" size={24}/>
                )
            }}/>
        </Navigator>
    )
}