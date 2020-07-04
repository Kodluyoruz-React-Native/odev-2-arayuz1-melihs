import React, { Component } from 'react';
import { Text, StyleSheet, Image ,View, TextInput, Button } from 'react-native';

class Login extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <Image
                    source={require('./assets/bg.png')}
                    style={styles.backgroundImage}
                >
                </Image>  
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
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});
