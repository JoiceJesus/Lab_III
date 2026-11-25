
import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { api } from "@/services/api";
import { styles } from "./styles";

type Deputado = {
  id: number;
  nome: string;
  siglaPartido: string;
  siglaUf: string;
  urlFoto: string;
};

export default function Home() {
  const [deputados, setDeputados] = useState<Deputado[]>([]);
  const [carregando, setCarregando] = useState(false);
  const [mensagem, setMensagem] = useState(
    "Toque no botão para consultar os deputados."
  );

  async function conectarAPI() {
    setCarregando(true);
    setMensagem("Consultando a API...");

    try {
      const resposta = await api.get<{ dados: Deputado[] }>(
        "/deputados",
        {
          params: {
            itens: 100,
            ordenarPor: "nome",
            ordem: "ASC",
          },
        }
      );

      const dados = resposta.data.dados;

      setDeputados(dados);

      setMensagem(
        `Consulta concluída: ${dados.length} deputados encontrados.`
      );

      console.log("Deputados recebidos:", dados);

    } catch (erro) {
      console.log("Erro na consulta:", erro);

      setMensagem(
        "Não foi possível consultar a API. Verifique sua conexão."
      );

    } finally {
      setCarregando(false);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <Text style={styles.titulo}>
        Deputados Federais
      </Text>

      <Text style={styles.descricao}>
        Consulte os deputados da Câmara dos Deputados.
      </Text>

      <Button
        title={carregando ? "Consultando..." : "Consultar deputados"}
        onPress={conectarAPI}
        disabled={carregando}
      />

      <Text style={styles.mensagem}>
        {mensagem}
      </Text>

      {carregando && (
        <ActivityIndicator size="large" color="#2c46B1" />
      )}

      <FlatList
        data={deputados}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Card
            nome={item.nome}
            siglaPartido={item.siglaPartido}
            siglaUf={item.siglaUf}
            urlFoto={item.urlFoto}
          />
        )}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          !carregando ? (
            <Text style={styles.vazio}>
              Nenhum deputado encontrado.
            </Text>
          ) : null
        }
      />
    </View>
  );
}
