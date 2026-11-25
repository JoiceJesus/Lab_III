import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#D1D3D9',
  },

  // Cabeçalho
  header: {
    height: 215,
    paddingHorizontal: 18,
    paddingTop: 45,
  },

  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },

  iconeLogo: {
    fontSize: 22,
    marginRight: 4,
  },

  nomeLogo: {
    color: '#304BB5',
    fontSize: 20,
    fontWeight: 'bold',
  },

  // Campo de texto
  input: {
    height: 35,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    paddingHorizontal: 12,
    fontSize: 12,
    color: '#222222',
  },

  // Botão adicionar
  botao: {
    height: 36,
    backgroundColor: '#304BB5',
    borderRadius: 7,
    marginTop: 16,
    marginHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },

  // Área da lista
  listaContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 16,
    paddingHorizontal: 23,
  },

  // Abas
  abas: {
    marginBottom: 12,
  },

  aba: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 17,
  },

  iconeAba: {
    fontSize: 15,
    color: '#999999',
    width: 18,
  },

  abaAtiva: {
    color: '#304BB5',
  },

  textoAba: {
    fontSize: 10,
    color: '#999999',
  },

  textoAtivo: {
    color: '#222222',
    fontWeight: 'bold',
  },

  // Produtos
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  iconeItem: {
    fontSize: 17,
    color: '#304BB5',
    marginRight: 10,
  },

  nomeProduto: {
    fontSize: 13,
    color: '#333333',
  },

  imagemLogo: {
  width: 200,
  height: 55,
},


});
