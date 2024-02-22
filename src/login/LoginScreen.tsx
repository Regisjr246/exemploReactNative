import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

function LoginScreen(): JSX.Element {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} resizeMode='contain' source={require('../assets/images/user.png')} />
            <View style={styles.card}>
                <Text style={styles.title}>Login</Text>
                <TextInput placeholder="E-mail" placeholderTextColor={"#151413"}></TextInput>
                <TextInput placeholder="Senha" placeholderTextColor={"#151413"}></TextInput>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F76900'
    },

    logo: {
        width: 80,
        height: 80,
        marginBottom: 20,
        marginTop: -150
    },

    card: {
        backgroundColor: "#FFFFFF",
        width: 300,
        borderRadius: 10,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },

    title:{
        fontSize:25,
        fontWeight:'bold',
        color: '#151413',
        marginBottom:20,
        textAlign:'center',
    }
});

export default LoginScreen;