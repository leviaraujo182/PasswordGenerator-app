import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, TouchableRipple } from 'react-native-paper'

export default function Home({navigation}) {

    function GerarSenha(){
        navigation.navigate('GerarSenha');
    }

    function SenhasSalvas(){
        navigation.navigate('SenhasSalvas')
    }

 return (
   <View style={styles.body}>
       <Image source={require('../img/padlock.png')} style={styles.imglock} />
       <Text style={styles.txtpass}>PASSWORD</Text>
       <Text style={styles.txtgenerator}>GENERATOR</Text>
       <TouchableRipple style={styles.btngerar} onPress={GerarSenha}>
           <Text style={styles.txtgerar}>Gerar senha</Text>
       </TouchableRipple>

       <TouchableRipple style={styles.btnsalvas} onPress={SenhasSalvas}>
           <Text style={styles.txtsalvas}>Senhas salvas</Text>
       </TouchableRipple>
   </View>
  );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#5200CC',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    txtpass: {
        fontSize: 50,
        fontFamily: 'Roboto-Bold',
        color: '#FFF'
    },

    txtgenerator: {
        fontFamily: 'Roboto-Light',
        fontSize: 50,
        color: '#fff'
    },

    btngerar: {
        marginTop: 20,
        backgroundColor: '#6600FF',
        paddingTop: 15,
        paddingBottom: 15,
        width: 280,
        elevation: 2,
        borderRadius: 25
    },

    txtgerar: {
        width: '100%',
        color: '#FFF',
        fontFamily: 'Roboto-Regular',
        textAlign: 'center',
        fontSize: 20
    },

    btnsalvas: {
        marginTop: 20,
        backgroundColor: '#6600FF',
        paddingTop: 15,
        paddingBottom: 15,
        width: 280,
        elevation: 2,
        borderRadius: 25
    },

    txtsalvas: {
        width: '100%',
        color: '#FFF',
        fontFamily: 'Roboto-Regular',
        textAlign: 'center',
        fontSize: 20
    },

    imglock: {
        width: 200,
        height: 200
    }
})