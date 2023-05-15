import React, { useState } from "react";
import Container from "../common/Container";
import Input from "../common/Input";
import { Image, Text, View } from "react-native"
import CustomButton from "../common/CustomButton";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import {useNavigation} from '@react-navigation/native'
export default function LoginComponent({onSubmit, error}) {
    const {navigate} = useNavigation()
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    return (
        <Container>
            <Image height={7} width={7} source={require("../../assets/images/logo.png")} style={[styles.logoImage]}>

            </Image>
            <View>
                <Text style={[styles.title]}>Welcome to RNContacts</Text>
                <Text style={[styles.subTitle]}>Please login here</Text>
                <View style={[styles.form]}>
                    {   error
                        &&
                        <Text style={[styles.error]}>{error}</Text>
                    }
                    <Input
                        label={"User Name"}
                        value={userName}
                        onChangeText={(text) => setUserName(text)}
                        style={{ padding: 10 }}
                        iconPosition={"right"}
                        //error={"This field is required"}
                        placeholder="Enter Username"

                    >
                    </Input>
                    <Input
                        secureTextEntry={true}
                        label={"Password"}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        style={{ padding: 10 }}
                        icon={<Text>Show</Text>}
                        iconPosition={"right"}
                        placeholder="Enter Password"
                    >
                    </Input>
                    <CustomButton
                        title={"Submit"}
                        loading={false}
                        disabled={false}
                        primary={true}
                        onPress={()=>{onSubmit({userName:userName, password})}}
                    />
                    <View style={[styles.createSection]}>
                        <Text style={[styles.infoText]}>Need a new account?</Text>
                        <TouchableOpacity onPress={()=>navigate('Register')}>
                            <Text style={[styles.linkBtn]}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </Container>
    )
}
