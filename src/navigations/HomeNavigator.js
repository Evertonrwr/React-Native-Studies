import React from "react";
import {Text} from "react-native";
import Com from "../components/com/com";
import { createStackNavigator } from "@react-navigation/stack";


function HomeNavigator(){
    const HomeStack = createStackNavigator();
    return(
        <HomeStack.Navigator initialRouteName="Contacts">
            <HomeStack.Screen name="Contacts" component={Com}/>
            <HomeStack.Screen name="Detalhe" component={Com}/>
        </HomeStack.Navigator>
    )
}
export default HomeNavigator;