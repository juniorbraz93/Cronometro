import React, { useState } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

let timer: any = null
let ss = 0
let mm = 0
let hh = 0

function App() {
  const [number, setNumber] = useState(0)
  const [textStart, setTextStart] = useState('Iniciar')
  const [final, setFinal] = useState(null)
  function start() {
    if (timer !== null) {
      clearInterval(timer)
      timer = null
      setTextStart('Iniciar')
    } else {
      timer = setInterval(() => {
        ss++

        if (ss == 60) {
          ss = 0
          mm ++
        }

        if (mm == 60) {
          mm = 0
          hh++
        }

        let format: any = `${(hh < 10 ? `0${hh}`: hh)}:${(mm < 10 ? `0${mm}`: mm)}:${(ss < 10 ? `0${ss}`: ss)}`

        setNumber(format)
      }, 1000)
      setTextStart('Pausar')
    }
  }

  function restart() {
    if (timer !== null) {
      clearInterval(timer)
      timer = null
    }
    setFinal(number)
    setNumber(0)
    ss = 0
    mm = 0
    hh = 0

    setTextStart('Iniciar')
    
  }
  return (
    <View style={styles.conteiner}>
      <Image source={require('./src/image/crono.png')} />
      <Text style={styles.timer}>{number}</Text>
      <View style={styles.btnConteiner}>
        <TouchableOpacity style={styles.btn} onPress={start}>
          <Text style={styles.btnText}>{textStart}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={restart}>
          <Text style={styles.btnText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.finalArea}>
        <Text style={styles.finalText}>{final ? `Ultimo tempo: ${final}` : ''}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },

  timer: {
    marginTop: -160,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#fff',
  },

  btnConteiner: {
    flexDirection: 'row',
    marginTop: 130,
    height: 40,
  },

  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },

  btnText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#00aeef',
  },

  finalArea: {
    marginTop: 40,
  },

  finalText: {
    fontSize: 25,
    color: '#fff',
    fontStyle: 'italic',
  },
});

export default App;
