import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import Realm from 'realm';
import getRealm from '../services/realm';

export default function GerarSenha() {

  const [senha, setSenha] = useState('');
 

  async function saveData(){
    const idrand = Math.random() * 10;
    const data = {
      id: idrand,
      password: senha,
    }

    const realm = await getRealm();

    realm.write(()=> {
      realm.create('Passwords', data);
    })
  }

  useEffect(() => {
      const generate = Math.random().toString(36).slice(-10);
      setSenha(generate);
  },[])

  function Passdokrl(){
      const generate = Math.random().toString(36).slice(-10);
      setSenha(generate);
  }

 return (
   <View style={styles.body}>
       <Text style={styles.txtsenhas}>SENHA</Text>
       <View style={styles.boxpass}>
         <Text style={styles.txtpass}>{senha}</Text>
       </View>

       <TouchableOpacity style={styles.btnnewpass} onPress={Passdokrl}>
         <Text style={styles.txtnewpass}>Gerar nova senha</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.btnsave} onPress={saveData}>
         <Text style={styles.txtsavepass}>Salvar senha</Text>
       </TouchableOpacity>
       
   </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#5200CC',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  txtsenhas: {
    color: '#FFF',
    fontSize: 70,
    fontFamily: 'Roboto-Bold'

  },

  boxpass: {
    borderWidth: 3,
    borderColor: '#6600FF',
    width: 250,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },

  txtpass: {
    color: '#FFF',
    fontSize: 25,
    fontFamily: 'Roboto-Medium'
  },

  btnnewpass: {
    backgroundColor: '#6600FF',
    marginTop: 20,
    width: 220,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    borderRadius: 25,
  },

  txtnewpass: {
    color: '#FFF',
  },

  txtsavepass: {
    color: '#FFF'
  },

  btnsave: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#6600FF',
    width: 220,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
  }
})