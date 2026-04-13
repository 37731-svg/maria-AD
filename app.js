import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function Home({ navigation }) {
  return (
    <View>
      <Text>Tela Inicial</Text>

      <Button
        title="Ir para Cadastro"
        onPress={() => navigation.navigate('Cadastro')}
      />
    </View>
  );
}


function Cadastro() {
  const [nome, setNome] = useState('');
  const [lista, setLista] = useState([]);

  function adicionar() {
    if (nome === '') {
      Alert.alert('Erro', 'Digite um nome');
      return;
    }

    setLista([...lista, { id: Date.now().toString(), nome }]);
    setNome('');
  }

  return (
    <View>
      <Text>Nome:</Text>

      <TextInput
        value={nome}
        onChangeText={setNome}
        style={{ borderWidth: 1 }}
      />

      <Button title="Adicionar" onPress={adicionar} />

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.nome}</Text>}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}