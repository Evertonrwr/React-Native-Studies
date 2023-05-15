
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './styles';

function Container({style, children}) {
    return (
        <ScrollView>
            <View style={[styles.space,style]}>
                {children}
            </View>
        </ScrollView>

    )
}
export default  Container;