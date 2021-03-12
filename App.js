import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [tela, setTela] = useState('menu');
  const [jogadorAtual, setJogadorAtual] = useState('');
  const [tabuleiro, setTabuleiro] = useState([]);
  const [jogadasRestantes, setJogadasRestantes] = useState(0);
  const [ganhador, setGanhador] = useState('');

  switch (tela) {
    case 'menu':
      return getTelaMenu();
    case 'jogo':
      return getTelaJogo();
    case 'ganhador':
      return getTelaGanhador();
  }

  function getTelaMenu() {
    return (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text style={styles.titulo}>Jogo da velha</Text>
          <Text style={styles.subtitulo}>Selecione o primeiro jogador</Text>

          <View style={styles.inlineItems}>
            <TouchableOpacity style={styles.boxJogador}>
              <Text style={styles.jogadorX}>X</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boxJogador}>
              <Text style={styles.jogadorO}>O</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }

  function getTelaJogo() {
    return (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text>Jogo</Text>
        </View>
    );
  }

  function getTelaGanhador() {
    return (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text>Ganhador</Text>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },

  subtitulo: {
    fontSize: 20,
    color: '#555',
    marginTop: 20,
  },

  inlineItems: {
    flexDirection: 'row',
  },

  boxJogador: {
    width: 80,
    height: 80,
    backgroundColor: "#ddd",
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },

  jogadorX: {
    fontSize: 40,
    color: '#553fda',
  },

  jogadorO: {
    fontSize: 40,
    color: '#da3f3f',
  },
});
