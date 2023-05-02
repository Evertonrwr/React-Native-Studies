import React from "react";
import {Text} from "react-native";
import Com from "../components/com/com";
const { createNativeStackNavigator } = require("@react-navigation/native-stack");


function HomeNavigator(){
    const HomeStack = createNativeStackNavigator();
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Contacts" component={Com}/>
        </HomeStack.Navigator>
    )
}
export default HomeNavigator;