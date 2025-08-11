import React from 'react';
import { View, Text, Image, Button, ScrollView } from 'react-native';

export default function Sasuke() {
  return (
    <ScrollView>
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: 'purple'}}>
      <Text style={{ fontSize: 25, fontFamily: 'serif', marginVertical: 10 }}>SASUKE</Text>
      <Image
                 source={require('../images/Sasuke.png')}
                 style={{ width: 260, height: 500 }} 
                 />
      <Text style={{ fontSize: 25, fontFamily: 'serif', marginVertical: 15 }}>UCHIHA</Text>
      <Button title="Aperte aqui"/>
    </View>
    </ScrollView>
  );
}
