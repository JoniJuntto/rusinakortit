import React, {useState} from 'react';
import questionsCouples from '../components/questionsCouples';
import logo from '../assets/LogoM.png';
import {Toast} from 'toastify-react-native';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function AddOwn() {
  const [question, setQuestion] = useState('');

  const addQuestion = () => {
    if (question === '') {
      Toast.dark('Kysymys ei voi olla tyhjä');
      return;
    }
    questionsCouples.push({
      id: questionsCouples.length,
      title: '',
      type: 'Kysymys',
      text: question,
    });
    setQuestion('');
    return 'Kysymys lisätty';
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Kysymys"
        onChangeText={text => {
          setQuestion(text);
        }}
        value={question}
      />
      <TouchableOpacity onPress={addQuestion} style={styles.button}>
        <Text style={styles.texts}>Lisää</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  texts: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  button: {
    width: 140,
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#94216d',
    marginTop: 20,
    marginRight: 20,
    alignSelf: 'flex-end',
  },
});
