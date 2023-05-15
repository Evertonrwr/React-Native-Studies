import React from "react";
import Com from "../components/com/com";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Register from "../screens/Register";


function AuthNavigator(){
    const AuthStack = createStackNavigator();
    return(
        <AuthStack.Navigator screenOptions={{headerShown:false}} initialRouteName="Login">
            <AuthStack.Screen name="Login" component={Login}/>
            <AuthStack.Screen name="Register" component={Register}/>
        </AuthStack.Navigator>
    )
}
export default AuthNavigator;