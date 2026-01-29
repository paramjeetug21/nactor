import { Pressable, StyleSheet, Text } from "react-native"
import { Color } from "../../utils/Color"

export const ButtonGreen=({buttonTitle , onPress})=>{
    return (
        <Pressable style={styles.pressable}  onPress={onPress} >
            <Text style={styles.textbutton} >
                {buttonTitle}
            </Text>
        </Pressable>
    )

}


const styles = StyleSheet.create({
    pressable : {
       backgroundColor : Color.primary,
       width : 300,
       height : 50,
       justifyContent : 'center',
       alignItems : 'center',
       borderRadius : 10
    },
    textbutton : {
        
       fontSize :15 ,
       color : 'white',
       fontWeight : 'bold'
    }
})