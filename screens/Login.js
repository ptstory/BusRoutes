import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, Button } from 'react-native';

export default class App extends React.Component {
    static navigationOptions = { header: null };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Image source={require('../assets/logo.png')} style={{width: '50%', height: '50%'}} resizeMode={'contain'} />
                <Text text="Username" style={{ color: 'white'}}>Username</Text>
                <TextInput style={{backgroundColor: '#000', color: '#fff', borderColor: '#fff', borderWidth: 2, width: '50%', margin: 5, padding: 5}} />
                <Text style={{ color: 'white'}}>Password</Text>
                <TextInput style={{backgroundColor: '#000', color: '#fff', borderColor: '#fff', borderWidth: 2, width: '50%', margin: 5, padding: 5}} secureTextEntry={true} />
                <Button onPress={() => navigate("Home")} title="Login" color="rgb(0,57,166)" style={{margin: 1}}/>
                <Text style={{ color: 'white'}}>Don't Have an account?<Text style={{ color: 'rgb(0,57,166)'}}> Sign up!</Text></Text>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});