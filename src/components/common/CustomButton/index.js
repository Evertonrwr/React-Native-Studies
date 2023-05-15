import React, { useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import styles from "./styles"
import colors from '../../../assets/theme/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

function CustomButton({
    style,
    title,
    loading,
    disabled,
    primary,
    secondary,
    danger,
    onPress,

    ...props
}) {
    const getBgColor = () => {
        if(disabled){
            return colors.grey
        }
        if (primary) {
            return colors.primary
        } else if (danger) {
            return colors.danger
        } else if (secondary) {
            return colors.secondary
        }

    }
    return (
        <TouchableOpacity
            onPress={onPress}	
            style={[styles.wrapper,{ backgroundColor: getBgColor() }]}
            disabled={disabled}

        >
            <View style={[styles.loaderSection, {}]}>
                {loading && <ActivityIndicator color={colors.white}/>}
                {title && <Text style={{color:disabled?"black":"white", paddingLeft:loading?7:0}}>{title}</Text>}

            </View>

            
        </TouchableOpacity>
    )

}

export default CustomButton