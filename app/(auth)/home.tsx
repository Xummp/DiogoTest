import { View, Text, Button } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';

const Home = () => {
  const { user } = useUser();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo, {user?.emailAddresses[0].emailAddress} 🎉</Text>
    </View>
    //Aqui começa realmente a tela do aplicativo como foi feita no Figma por caio
  );
};

export default Home;
