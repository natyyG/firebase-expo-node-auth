import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'
const Homescreen = () => {
    const navigation = useNavigation();
    const handleSignOut =()=>{
        auth.signOut()
        .then(()=>{
            navigation.replace("Login")
        }).catch(
            error=>{
                alert(error.message)
            }
        )
    }
  return (
    <View style={styles.container}>
        <Text>Email: {auth.currentUser?.email} </Text>
        <TouchableOpacity
              style={styles.button}
              onPress={handleSignOut}
        >
            <Text style={styles.buttonOutlineText}>Sign Out</Text>
        </TouchableOpacity>
        
      
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        width:200,
        paddingHorizontal:20,
        paddingVertical:5,
        marginTop:30,
        backgroundColor: 'navy',
        borderRadius:6,
    },
    buttonOutlineText:{
        color: 'white',
        textAlign: 'center',
        paddingVertical: 5,
    }
})