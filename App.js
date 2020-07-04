import React, { Component } from 'react';
import { 
    Text,
     StyleSheet,
      ImageBackground,
      TouchableOpacity,
      View,
      TextInput
     } from 'react-native';

const textColor = '#B7BDD0';  
class Login extends Component {
    state = { page: ''};

     nextOnPress = () => {
        this.setState({
            page: 'signUp'
        });
    }

    signUpOnPress = () => {
        this.setState({
            page: 'login'
        })
    }
    
    loginOnPress = () => {
        alert('welcome');
    }
    homeOnPress = () => {
        this.setState({
            page: ''
        })
    }

    introPage() {
        return (
            <ImageBackground
                    source={require('./assets/bg.png')}
                    style={styles.backgroundImage}
                >
                <Text style={styles.title}>Hoşgeldiniz</Text>
                <Text style={styles.description}>React Native 2. hafta ödevi</Text>
                <TouchableOpacity
                    onPress={ this.nextOnPress}
                    style={ styles.button}>
                        <Text style={ styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }

    loginPage() {
        return (
            <View style={styles.loginContainer}>
                <View style={styles.test}>
                    <Text style={ styles.loginTitle }>Login</Text>
                    <Text style={styles.loginDescription}>React Native 2. hafta ödevi</Text>
                    <TextInput
                        placeholderTextColor= {textColor}
                        placeholder="Email address"
                        style={ styles.loginEmailInput}
                    />
                    <TextInput
                        placeholderTextColor= {textColor}
                        placeholder="Password"
                        secureTextEntry= {true}
                        style={ styles.loginPasswordInput}
                    />
                    <TouchableOpacity
                        onPress={ this.loginOnPress}
                        style={ styles.loginButton}>
                        <Text style={ styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ this.homeOnPress}
                        style={ styles.homeButton}>
                        <Text style={ styles.buttonText}>Home</Text>
                    </TouchableOpacity>
                </View>
               
                <ImageBackground
                    source={require('./assets/bg.png')} 
                    style={styles.loginContainer}
                >
                </ImageBackground>
            </View>
        )
    }

    signUpPage(){
        return (
            <View style={styles.loginContainer}>
                <View style={styles.test}>
                    <Text style={ styles.loginTitle }>Sign Up</Text>
                    <Text style={styles.loginDescription}>React Native 2. hafta ödevi</Text>
                    <TextInput
                        placeholderTextColor= {textColor}
                        placeholder="Email address"
                        style={ styles.loginEmailInput}
                    />
                    <TextInput
                        placeholderTextColor= {textColor}
                        placeholder="Password"
                        secureTextEntry= {true}
                        style={ styles.loginPasswordInput}
                    />
                    <TextInput
                        placeholderTextColor= {textColor}
                        placeholder="Password"
                        secureTextEntry= {true}
                        style={ styles.loginPasswordInput}
                    />
                    <TouchableOpacity
                        onPress={ this.signUpOnPress}
                        style={ styles.loginButton}>
                        <Text style={ styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
               
                <ImageBackground
                    source={require('./assets/bg.png')} 
                    style={styles.loginContainer}
                >
                </ImageBackground>
            </View>
        )
    }


    render() {
        const { page } = this.state;
        return (
            <View style={ styles.mainContainer }>
               { page === '' && this.introPage()} 
                { page === 'login' && this.loginPage()}
                { page === 'signUp' && this.signUpPage()}
                { page === 'home' && this.signUpPage()}
            </View>
        )
    }
}

export default Login;


const styles = StyleSheet.create({
    mainContainer: {
        flex:1
    },
    backgroundImage: {
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
        color:textColor,
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
    },
    loginContainer: {
        flex:1,
        backgroundColor: '#F0F0F2',
        
    },
    loginTitle: {
        marginTop:100,
        marginLeft:50,
        color: '#26233A',
        fontSize: 30,
        fontWeight: "bold"
    },
    loginDescription: {
        marginLeft:50,
        paddingTop:10,
        color:textColor,
        justifyContent:'center',
        fontSize:18 
    },
    loginEmailInput: {
        height: 50,
        borderRadius:30,
        marginTop:20,
        marginRight:50,
        marginLeft:50,
        fontSize: 15,
        backgroundColor:'white'
    },
    loginPasswordInput: {
        height: 50,
        borderRadius:30,
        marginTop:20,
        marginRight:50,
        marginLeft:50,
        fontSize: 15,
        backgroundColor:'white'
    },
    loginButton: {
        alignItems: 'center',
        backgroundColor:"#5D6BA4",
        borderRadius:30,
        marginTop:20,
        marginRight:50,
        marginBottom:20,
        marginLeft:50,
        height:50
    },
    homeButton: {
        alignItems: 'center',
        backgroundColor:"#935B84",
        borderRadius:30,
        marginRight:50,
        marginLeft:50,
        height:50
    }
});
