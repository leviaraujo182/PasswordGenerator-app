import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar,  } from 'react-native';
import { Card } from 'react-native-paper'
import Realm from 'realm';
import getRealm from '../services/realm';
import { getStatusBarHeight } from 'react-native-status-bar-height'



export default function pages() {

  const color = '#F24532'

    const [DataUsers, setDataUsers] = useState([]);

    useEffect(() => {
        async function loadData(){
          const realm = await getRealm();
          const data = realm.objects('Passwords');
          setDataUsers(data);
  
        }
  
        loadData();
      }, []);


 return (
   <View style={styles.body}>
      <View style={styles.viewcontent}>
     {DataUsers.map((passs) => {
       return (
        <Card style={styles.cardpass}>
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
          <Text style={styles.txtsenha}>SENHA</Text>
          <Text style={styles.txtpass} key={passs.password}>{passs.password}</Text>
          </View>
        </Card>
       )

     })}
     </View>
   </View>
  );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#5200CC',
        width: '100%',
        height: '100%',
    },

    cardpass: {
      width: '90%',
      height: '20%',
      backgroundColor: '#6600FF',
      elevation: 5,
      alignItems: 'center',
      marginTop: 20

    },

    txtsenha: {

      color: '#FFF',
      marginTop: 5,
      fontSize: 30,
      textAlign: 'center'
    },

    txtpass: {
      fontFamily: 'Roboto-Bold',
      color: '#FFF',
      fontSize: 40,
      textAlign: 'center'
    },

    viewcontent: {
      marginTop: StatusBar.currentHeight + 30,
      justifyContent: 'center',
      alignItems: 'center'
    }
})