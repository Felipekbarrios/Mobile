import React from 'react';
import { View, Text, Image, Button, ScrollView } from 'react-native';

export default function Naruto() {
  return (
    <ScrollView>
      <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange'  }}>
        <Text style={{ fontSize: 25, fontFamily: 'serif', marginVertical: 10 }}>NARUTO</Text>
        
        <Image
          source={require('../images/Naruto.png')}
          style={{ width: 350, height: 500 }}
        />

        <Text style={{ fontSize: 25, fontFamily: 'serif', marginVertical: 15 }}>UZUMAKI</Text>
        <Button title="Aperte aqui"/>
      </View>
    </ScrollView>
  );
}
