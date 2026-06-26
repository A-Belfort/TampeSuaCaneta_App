import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Animated, Button } from 'react-native';

function homeScreen () {
    const navigation = useNavigation();

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirma, setSenhaConfirma] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const efetuarLogin = async () => {
        let loginUsuario = login.trim()
        let loginSenha = senha.trim()
        navigation.navigate("Home")
    }

    const navegarCadastro = async () => {
        navigation.navigate("Cadastro")
    }

    return (
    <View>
        <TextInput
            value={login}
            onChangeText={setLogin}
            placeholder='Login'
        />
        <TextInput
            value={senha}
            onChangeText={setSenha}
            placeholder='Senha'
        />
        <Button
            style={styles.button}
            onPress={efetuarLogin}
            title='Login'
            color='000000'
            accessibilityLabel='Botão de efetuar login'
            disabled={!login.trim() || !senha.trim() }
        />
        <Button
            style={styles.button}
            onPress={efetuarLogin}
            title='Não tem login?'
            color='000000'
            accessibilityLabel='Botão de efetuar login'
        />
    </View>
    );
};