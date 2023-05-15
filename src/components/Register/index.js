import React, { useState } from "react";
import Container from "../common/Container";
import Input from "../common/Input";
import { Image, Text, View } from "react-native"
import CustomButton from "../common/CustomButton";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native'
export default function RegisterComponent({
    form,
    errors,
    onSubmit,
    onChange
}) {
    const { navigate } = useNavigation()
    const [inp1, setInp1] = useState("")
    return (
        <Container>
            <Image height={7} width={7} source={require("../../assets/images/logo.png")} style={[styles.logoImage]}>

            </Image>
            <View>
                <Text style={[styles.title]}>Welcome to RNContacts</Text>
                <Text style={[styles.subTitle]}>Create a free account</Text>
                <View style={[styles.form]}>
                    <Input
                        label={"User Name"}
                        value={form.userName}
                        onChangeText={(value) => onChange({ name: "userName", value })}
                        style={{ padding: 10 }}
                        iconPosition={"right"}
                        error={errors.userName}
                        placeholder="Enter UserName"

                    >
                    </Input>
                    <Input
                        label={"First Name"}
                        value={form.firstName}
                        onChangeText={(value) => onChange({ name: "firstName", value })}
                        style={{ padding: 10 }}
                        iconPosition={"right"}
                        error={errors.firstName}
                        placeholder="Enter first name"

                    >
                    </Input>
                    <Input
                        label={"Last Name"}
                        value={form.lastName}
                        onChangeText={(value) => onChange({ name: "lastName", value })}
                        style={{ padding: 10 }}
                        iconPosition={"right"}
                        error={errors.lastName}
                        placeholder="Enter last name"

                    >
                    </Input>
                    <Input
                        label={"Email"}
                        value={form.email}
                        onChangeText={(value) => onChange({ name: "email", value })}
                        style={{ padding: 10 }}
                        iconPosition={"right"}
                        error={errors.email}
                        placeholder="Email"

                    >
                    </Input>
                    <Input
                        secureTextEntry={true}
                        label={"Password"}
                        value={form.password}
                        onChangeText={(value) => onChange({ name: "password", value })}
                        style={{ padding: 10 }}
                        icon={<Text>Show</Text>}
                        iconPosition={"right"}
                        placeholder="Enter Password"
                        error={errors.password}
                    >
                    </Input>
                    <CustomButton
                        title={"Submit"}
                        loading={false}
                        disabled={false}
                        primary={true}
                        onPress={onSubmit}
                    />
                    <View style={[styles.createSection]}>
                        <Text style={[styles.infoText]}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigate('Login')}>
                            <Text style={[styles.linkBtn]}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </Container>
    )
}
