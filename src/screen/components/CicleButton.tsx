import { Pressable, StyleSheet, Text } from "react-native"
import { Color } from "../../utils/Color"

export const CicleButton=()=>{
    return (
        <Pressable style={styles.pressable} >
            <Text style={styles.textbutton} >
            =
            </Text>
        </Pressable>
    )

}

    const styles = StyleSheet.create({
        pressable : {
           backgroundColor : Color.primary,
           width : 50,
           height : 50,
           justifyContent : 'center',
           alignItems : 'center',
           borderRadius : 25
        },
        textbutton : {
            
           fontSize :15 ,
           color : 'white',
           fontWeight : 'bold'
        }
    })