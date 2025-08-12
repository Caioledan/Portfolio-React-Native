import { NavigationContainer } from "@react-navigation/native";
import { TabRoutes } from "./Routes";


export function Routes(){
    return (
        <NavigationContainer>
            <TabRoutes/>
        </NavigationContainer>
    )
}