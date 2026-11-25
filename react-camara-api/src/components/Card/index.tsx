
import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

interface DeputadoProps {
  nome: string;
  siglaPartido: string;
  siglaUf: string;
  urlFoto: string;
}

export function Card({
  nome,
  siglaPartido,
  siglaUf,
  urlFoto,
}: DeputadoProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: urlFoto }}
        style={styles.foto}
      />

      <View style={styles.informacoes}>
        <Text style={styles.nome}>{nome}</Text>

        <Text style={styles.detalhes}>
          Partido: {siglaPartido}
        </Text>

        <Text style={styles.detalhes}>
          Estado: {siglaUf}
        </Text>
      </View>
    </View>
  );
}
