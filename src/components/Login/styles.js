import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";
export default StyleSheet.create({
    logoImage:{
        height:200,
        width:200,
        alignSelf:"center",
        marginTop:50

    },
    title:{
        fontSize:21,
        textAlign:'center',
        paddingTop:20,
        fontWeight:'500'
    },
    subTitle:{
        fontSize:17,
        textAlign:'center',
        paddingVertical:20,
        fontWeight:'500',
    },
    form:{
        padding:20,
        },
    createSection:{
        flexDirection:"row"

    },
    infoText:{
        fontSize:17,


    },
    linkBtn:{
        paddingLeft:17,
        color:colors.primary,
        fontSize:16

    },
    error:{
        fontSize:17,
        textAlign:'center',
        fontWeight:'500',
        color:colors.danger
    },

})