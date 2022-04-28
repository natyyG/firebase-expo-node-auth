import { StyleSheet, Text, View } from 'react-native'
import React,{useState, useEffect} from 'react'
import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { auth } from '../firebase'
import { NavigationContainer } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'
const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    
    const handleSignUp = ()=>{
        auth.createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log("Registered in ",user.email);
        }).catch(
            error =>{
                alert(error.message)}
            )
    }
    const handleLogIn = () =>{
        auth.signInWithEmailAndPassword(email,password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log("loged in with",user.email);
        })
        .catch(
            error =>{
                alert(error.message)}
            )

    }
    const navigation = useNavigation();
    useEffect(() => {

        const unsubscribe = auth.onAuthStateChanged(user=>{
            if(user){
                navigation.replace("Home");//also possilbe to use navigate
            }
        })
       return unsubscribe;
    }, []);
  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
      <View style={styles.inputContainer}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text=>{setEmail(text)}}
      style={[styles.input, styles.marginprop]}
      />
    <TextInput 
        placeholder="password"
        value={password}
        onChangeText={text=>{setPassword(text)}}
        style={styles.input}
        secureTextEntry
        />
    </View>
    <View style={styles.buttonContainer}>
        <TouchableOpacity
            onPress={handleLogIn}
            style={styles.button}
        >
            <Text style={styles.buttonOutlineText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={handleSignUp}
            style={styles.Sbutton}
        >
            <Text style={styles.SbuttonOutlineText}>Regisger</Text>
        </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        marginTop:5,
        width:'100%',
        height:40,
        backgroundColor: 'white',
        paddingLeft: 15,
        borderRadius: 5,
    },
    inputContainer:{
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        width:'80%',
    },
    button:{
        width:250,
        paddingHorizontal:20,
        paddingVertical:5,
        marginTop:10,
        backgroundColor: 'navy',
        borderRadius:6,
    },
    buttonOutlineText:{
        color: 'white',
        textAlign: 'center',
        paddingVertical: 5,
    },
    Sbutton:{
        backgroundColor:'white',
        marginTop:-10,
        paddingHorizontal:20,
        paddingVertical:5,
        marginTop:20,
        borderRadius:6,
        borderColor:'blue',
        borderWidth:1,
    },
    SbuttonOutlineText:{
        backgroundColor:'white',
        color: 'blue',
        textAlign: 'center',
        paddingVertical: 5,
    }
})