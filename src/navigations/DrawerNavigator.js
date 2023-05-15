import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./HomeNavigator";

function DrawerNavigator(){
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeNavigator} options={{headerShown: false}}/>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;