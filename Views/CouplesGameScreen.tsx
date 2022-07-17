import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import questions from '../components/questionsCouples';
import logo from '../assets/LogoM.png';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function CouplesGameScreen() {
  interface Question {
    id: number;
    type: string;
    title: string;
    question: string;
    text: string;
  }

  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState<Question>({
    id: 0,
    title: '',
    type: '',
    question: '',
    text: '',
  });
  const newItem = () => {
    setIndex(index + 1);
    try {
      setQuestion(questions[index]);
    } catch (error) {
      console.log(error);
      setQuestion({
        id: 0,
        title: '',
        type: '',
        question: '',
        text: '',
      });
    }
  };

  return (
    <View>
      <Image source={logo} style={styles.logo} />
      <View>
        {index === 0 ? (
          <TouchableOpacity onPress={newItem}>
            <View>
              <Text style={styles?.beginText}>Aloita peli painamalla</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={newItem}>
            <View
              style={
                question?.type === 'Tehtävä'
                  ? styles.container2
                  : styles.container
              }>
              <Text style={styles?.type}>{question?.type}</Text>
              <Text style={styles?.textsHeader}>{question?.title}</Text>
              <Text style={styles?.texts}>{question?.text}</Text>
              <Text style={styles?.bottom}>Rusinakortit</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 100,
    height: height - 200,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f5f5f5',
    alignSelf: 'center',
    justifySelf: 'center',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 100,
    height: height - 200,
    backgroundColor: '#94216d',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f5f5f5',
    alignSelf: 'center',
    justifySelf: 'center',
  },
  texts: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
  },
  textsHeader: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  beginText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  type: {
    fontSize: 50,
    position: 'absolute',
    top: 0,
    color: 'black',
    fontWeight: 'bold',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    color: 'black',
    fontStyle: 'italic',
  },
});
