import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [tela, setTela] = useState('menu');
  const [jogadorAtual, setJogadorAtual] = useState('');
  const [tabuleiro, setTabuleiro] = useState([]);
  const [jogadasRestantes, setJogadasRestantes] = useState(0);
  const [ganhador, setGanhador] = useState('');

  function iniciarJogo(jogador) {
    setJogadorAtual(jogador);

    setJogadasRestantes(9);
    setTabuleiro([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);

    setTela('jogo');
  }

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
            <TouchableOpacity
                style={styles.boxJogador}
                onPress={() => iniciarJogo('X')}
            >
              <Text style={styles.jogadorX}>X</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.boxJogador}
                onPress={() => iniciarJogo('O')}
            >
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
          <Text style={styles.titulo}>Jogo da velha</Text>
          {
            tabuleiro.map((linha, numeroLinha) => {
              return(
                  <View key={numeroLinha} style={styles.inlineItems}>
                    {
                      linha.map((coluna, numeroColuna) => {
                        return(
                          <TouchableOpacity
                              key={numeroColuna}
                              style={styles.boxJogador}
                          >
                            <Text style={coluna === 'X' ? styles.jogadorX : styles.jogadorO }>{coluna}</Text>
                          </TouchableOpacity>
                        )
                      })
                    }
                  </View>
              )
            })
          }
          <TouchableOpacity
              style={styles.botaoMenu}
              onPress={() => setTela('menu')}
          >
            <Text style={styles.textBotaoMenu}>Volta ao menu</Text>
          </TouchableOpacity>
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

  botaoMenu: {
    marginTop: 20,
  },

  textBotaoMenu: {
    color: '#4e6fe4',
  },
});
