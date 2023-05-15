import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";
import { GestureHandlerRootView, TextInput } from "react-native-gesture-handler";
export default StyleSheet.create({
    wrapper:{
        height:42,
        borderWidth:1,
        // borderColor:colors.grey,
        borderRadius: 10,
        paddingHorizontal: 5,
        alignItems:'center',
        marginTop:5,

    },
    textInput:{
        // backgroundColor:colors.danger,
        flex:1

    },
    inputContainer:{
        paddingVertical:12
    }, 
    error:{
        color: colors.danger,
        paddingTop:4,
        fontSize:12,
    }

})