import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from "./styles"
import colors from '../../../assets/theme/colors'

function Input({
    style,
    onChangeText,
    value,
    label,
    icon,
    iconPosition,
    error,
    ...props
}) {
    const [focused, setFocused] = React.useState(false)
    const getDirection = () =>{
        if(icon && iconPosition){
            if(iconPosition == "left"){
                return "row"
            }else{
                return "row-reverse"
            }
        }else{
            return "row"
        }
    }
    const getBorderColor = () =>{
        if(focused){
            return colors.primary
        }
        if(error){
            return colors.danger
        }else{
            return colors.grey
        }

    }
    return (
        <View style={[styles.inputContainer]}>

            {label && <Text>{label}</Text>}
            <View>
                <View style={[styles.wrapper, { borderColor: getBorderColor(), flexDirection: getDirection(),}]}>
                    <View>{icon && icon}</View>
                    <TextInput
                        style={[styles.textInput, style]}
                        onChangeText={onChangeText}
                        value={value}
                        onFocus={()=> setFocused(true)}
                        onBlur={()=> setFocused(false)}
                        {...props}
                    />
                </View>
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )

}

export default Input