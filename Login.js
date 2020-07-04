import React, { Component } from 'react';
import { 
    Text,
     StyleSheet,
      ImageBackground,
      TouchableOpacity,
      View,
      Button
     } from 'react-native';

class Login extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <ImageBackground
                    source={require('./assets/bg.png')}
                    style={styles.backgroundImage}
                >
                    <Text style={styles.title}>Hoşgeldiniz</Text>
                    <Text style={styles.description}>React Native 2. hafta ödevi</Text>
                    
                    <TouchableOpacity style={ styles.button}>
                        <Text style={ styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </ImageBackground>  
            </View>
        )
    }
}

export default Login;


const styles = StyleSheet.create({
    container: {
        flex:1
    },
    backgroundImage: {
        flex: 1,
        flex: 1,
        justifyContent: "center",
        resizeMode: "cover",
    },
    title: {
        marginTop:350,
        marginLeft:50,
        color: '#26233A',
        fontSize: 30,
        fontWeight: "bold"
    },
    description: {
        marginLeft:50,
        marginTop:15,
        color:'#B7BDD0',
        justifyContent:'center',
        fontSize:18
    },
    button: {
        alignItems: 'center',
        backgroundColor:"#5D6BA4",
        borderRadius:30,
        marginTop:20,
        marginRight:50,
        marginLeft:50,
        height:50
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 8,
    }
});
