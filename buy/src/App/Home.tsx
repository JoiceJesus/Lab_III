import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

import { styles } from './styles';

type Produto = {
  id: string;
  nome: string;
  comprado: boolean;
};

export function Home() {
  const [produto, setProduto] = useState('');
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [aba, setAba] = useState('Comprados');

  function adicionarProduto() {
    if (produto.trim() === '') {
      return;
    }

    const novoProduto: Produto = {
      id: Date.now().toString(),
      nome: produto.trim(),
      comprado: false,
    };

    setProdutos([...produtos, novoProduto]);
    setProduto('');
    setAba('Pendentes');
  }

  function alternarStatus(id: string) {
    setProdutos(
      produtos.map((item) =>
        item.id === id
          ? { ...item, comprado: !item.comprado }
          : item
      )
    );
  }

  const produtosFiltrados = produtos.filter((item) =>
    aba === 'Comprados' ? item.comprado : !item.comprado
  );

  return (
    <View style={styles.container}>

      {/* Cabeçalho */}
      <View style={styles.header}>

        <View style={styles.logo}>
  <Image
    source={require('../../assets/images/logo.png')}
    style={styles.imagemLogo}
    resizeMode="contain"
  />
</View>
        <TextInput
          style={styles.input}
          placeholder="O que você precisa"
          placeholderTextColor="#333"
          value={produto}
          onChangeText={setProduto}
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={adicionarProduto}
        >
          <Text style={styles.textoBotao}>Adicionar</Text>
        </TouchableOpacity>

      </View>

      {/* Área da lista */}
      <View style={styles.listaContainer}>

        {/* Abas */}
        <View style={styles.abas}>

          <TouchableOpacity
            style={styles.aba}
            onPress={() => setAba('Comprados')}
          >
            <Text
              style={[
                styles.iconeAba,
                aba === 'Comprados' && styles.abaAtiva,
              ]}
            >
              {aba === 'Comprados' ? '✓' : '○'}
            </Text>

            <Text
              style={[
                styles.textoAba,
                aba === 'Comprados' && styles.textoAtivo,
              ]}
            >
              Comprados
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.aba}
            onPress={() => setAba('Pendentes')}
          >
            <Text
              style={[
                styles.iconeAba,
                aba === 'Pendentes' && styles.abaAtiva,
              ]}
            >
              {aba === 'Pendentes' ? '✓' : '○'}
            </Text>

            <Text
              style={[
                styles.textoAba,
                aba === 'Pendentes' && styles.textoAtivo,
              ]}
            >
              Pendentes
            </Text>
          </TouchableOpacity>

        </View>

        {/* Lista de produtos */}
        <FlatList
          data={produtosFiltrados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => alternarStatus(item.id)}
            >
              <Text style={styles.iconeItem}>
                {item.comprado ? '☑' : '○'}
              </Text>

              <Text style={styles.nomeProduto}>
                {item.nome}
              </Text>
            </TouchableOpacity>
          )}
        />

      </View>

    </View>
  );
}